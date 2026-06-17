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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center font-semibold tracking-tighter text-2xl z-20 hover:opacity-80 transition-opacity" href="#">
<span className="text-slate-900">SOCIAL</span>
<div className="flex flex-col text-[10px] leading-[9px] text-rose-600 font-semibold mx-1 justify-center tracking-normal uppercase">
<span>B</span><span>R</span><span>E</span><span>W</span>
</div>
<span className="text-slate-900">CAFÉ</span>
</a>

<nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#catering">Catering</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#reservations">Reservations</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#gallery">Gallery</a>
</nav>

<div className="hidden md:flex items-center gap-4 z-20">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#reservations">Book a Table</a>
<a className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors flex items-center gap-2" href="#">
                    Order Online
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<button className="lg:hidden text-slate-900 z-20">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 w-full h-full bg-slate-900">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-60" loop="" muted="" playsinline="">

<source src="https://cdn.coverr.co/videos/coverr-pouring-coffee-in-a-cafe-4351/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
</div>
<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center">
<div className="flex flex-wrap justify-center gap-2 mb-8">
<span className="text-xs font-medium uppercase tracking-widest border border-white/20 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5">All-Day Brunch</span>
<span className="text-xs font-medium uppercase tracking-widest border border-white/20 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5">Catering Available</span>
<span className="text-xs font-medium uppercase tracking-widest border border-white/20 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 hidden sm:inline-block">Home Delivery</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight">
                Fresh Flavours.<br/>Social Moments.<br/>Delivered Daily.
            </h1>
<p className="text-lg md:text-xl font-light text-slate-200 mb-10 max-w-2xl leading-relaxed">
                From artisan coffee and brunch favourites to catering and home delivery, Social Brew Café brings people together over food made with heart.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-rose-600 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-rose-700 transition-colors flex items-center justify-center gap-2" href="#">
                    Order Online
                </a>
<a className="w-full sm:w-auto bg-white/10 text-white backdrop-blur-md border border-white/20 text-lg font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center" href="#reservations">
                    Book a Table
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-8">Welcome to Social Brew Café</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                At Social Brew Café, we believe great food creates great connections. Whether you’re dropping in for your morning coffee, enjoying a relaxed brunch with friends, booking a casual business lunch, or organising catering for a special event, we’re here to make every experience memorable.
            </p>
<p className="text-lg text-slate-600 leading-relaxed mb-10">
                Our menu is built around fresh ingredients, vibrant flavours, and dishes designed to be shared, savoured, and talked about.
            </p>
<a className="inline-flex items-center gap-2 text-rose-600 font-medium text-lg hover:text-rose-700 transition-colors group" href="#menu">
                Explore Our Menu
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="py-24 bg-[#F8F7F5] px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-16 text-center">How We Serve You</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Dine-In</h3>
<p className="text-lg text-slate-600 leading-relaxed">Enjoy a warm, welcoming café atmosphere perfect for casual catch-ups, family meals, and relaxed brunches.</p>
</div>

<div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Online Ordering</h3>
<p className="text-lg text-slate-600 leading-relaxed">Order your favourites online for quick pickup or easy delivery straight to your door.</p>
</div>

<div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="utensils-crossed" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Catering</h3>
<p className="text-lg text-slate-600 leading-relaxed">From office lunches to private celebrations, our menus are designed to impress guests of every kind.</p>
</div>

<div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="calendar-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Reservations</h3>
<p className="text-lg text-slate-600 leading-relaxed">Reserve your table online and enjoy a seamless, stress-free dining experience.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white px-6" id="menu">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Signature Favourites</h2>
<p className="text-lg text-slate-600">A few of the dishes and drinks our guests keep coming back for.</p>
</div>
<a className="inline-flex items-center gap-2 text-slate-900 font-medium text-lg hover:text-rose-600 transition-colors group shrink-0" href="#">
                    View Full Menu
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
<img alt="House Burger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">House Burger</h3>
<p className="text-lg text-slate-600">A perfectly toasted bun, premium beef patty, fresh greens, and house-made flavour combinations.</p>
</div>

<div className="group cursor-pointer lg:translate-y-8">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
<img alt="Loaded Brunch Plate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Loaded Brunch Plate</h3>
<p className="text-lg text-slate-600">A colourful brunch classic made with fresh seasonal ingredients and café-style flair.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
<img alt="Fresh Juice &amp; Smoothies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Fresh Juice &amp; Smoothies</h3>
<p className="text-lg text-slate-600">Bright, refreshing, and made to energise any part of your day.</p>
</div>

<div className="group cursor-pointer lg:translate-y-8">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
<img alt="Specialty Coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Specialty Coffee</h3>
<p className="text-lg text-slate-600">Expertly brewed coffee made from quality beans for the perfect daily ritual.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F8F7F5] px-6 mt-16 lg:mt-0" id="catering">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-square rounded-[2rem] overflow-hidden">
<img alt="Catering Platter" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-xs hidden sm:block">
<div className="flex items-center gap-4 mb-2">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
<i className="w-5 h-5" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="font-medium text-slate-900">Highly Rated</span>
</div>
<p className="text-sm text-slate-600">"The best catering experience we've had for our office."</p>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-sm font-medium uppercase tracking-widest text-rose-600 mb-4 block">Events &amp; Gatherings</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">Catering for Every Occasion</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-10">
                        Make your next event effortless with Social Brew Café catering. We offer flexible catering options for corporate meetings, birthdays, private gatherings, school events, and special celebrations. From beautifully presented platters to crowd-pleasing brunch selections, our team helps you create a menu your guests will remember.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-rose-600" data-lucide="check-circle-2" strokeWidth="1.5"></i> Corporate Catering
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-rose-600" data-lucide="check-circle-2" strokeWidth="1.5"></i> Private Events
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-rose-600" data-lucide="check-circle-2" strokeWidth="1.5"></i> Breakfast &amp; Brunch Platters
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-rose-600" data-lucide="check-circle-2" strokeWidth="1.5"></i> Custom Menu Options
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-rose-600" data-lucide="check-circle-2" strokeWidth="1.5"></i> Reliable Delivery
                        </li>
</ul>
<a className="inline-flex bg-slate-900 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-slate-800 transition-colors" href="#">
                        Request a Catering Quote
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-rose-600 px-6 overflow-hidden relative">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Your Favourites, Delivered</h2>
<p className="text-xl text-rose-100 leading-relaxed mb-4 max-w-2xl mx-auto">
                Craving café-quality food at home or at work? Order from our menu online and enjoy fresh meals, drinks, and treats delivered conveniently to your doorstep.
            </p>
<p className="text-lg text-rose-200 mb-10 max-w-xl mx-auto">
                Fast, easy, and perfect for lunch breaks, cozy nights in, or group orders.
            </p>
<a className="inline-flex bg-white text-rose-600 text-lg font-medium px-10 py-4 rounded-full hover:bg-slate-50 transition-transform hover:scale-105 duration-300 shadow-xl shadow-rose-900/20" href="#">
                Order Delivery Now
            </a>
</div>
</section>

<section className="py-24 md:py-32 bg-white px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">What’s On This Month</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                    Discover limited-time menu specials, seasonal drinks, chef recommendations, and local collaborations. There’s always something new to try.
                </p>
<a className="inline-flex items-center gap-2 text-rose-600 font-medium text-lg hover:text-rose-700 transition-colors group" href="#">
                    See Current Specials
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-stone-50 rounded-[2rem] p-8 border border-stone-200 flex flex-col justify-between h-full">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-3 block">Special</span>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Seasonal Brunch</h3>
<p className="text-lg text-slate-600 mb-6">A fresh take on classic avocado toast with spring peas and house-made ricotta.</p>
</div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200">
<i className="w-5 h-5 text-slate-900" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-slate-900 text-white rounded-[2rem] p-8 flex flex-col justify-between h-full shadow-xl">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-rose-400 mb-3 block">New Drink</span>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Honey Oat Matcha</h3>
<p className="text-lg text-slate-300 mb-6">Premium ceremonial grade matcha whisked with local honey and creamy oat milk.</p>
</div>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
<i className="w-5 h-5 text-white" data-lucide="cup-soda" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-stone-50 rounded-[2rem] p-8 border border-stone-200 flex flex-col justify-between h-full">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-3 block">Offer</span>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Weekend Combo</h3>
<p className="text-lg text-slate-600 mb-6">Grab any signature burger and a craft soda for a special price every weekend.</p>
</div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200">
<i className="w-5 h-5 text-slate-900" data-lucide="tag" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-rose-50 rounded-[2rem] p-8 border border-rose-100 flex flex-col justify-between h-full">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-rose-600 mb-3 block">Catering</span>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Team Lunch Pack</h3>
<p className="text-lg text-slate-600 mb-6">Our most popular wraps, salads, and treats bundled perfectly for groups of 10+.</p>
</div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-rose-200">
<i className="w-5 h-5 text-rose-600" data-lucide="users" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F7F5] px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-16 max-w-xl">Why Guests Choose Social Brew Café</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

<div className="flex gap-6">
<div className="shrink-0 mt-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
<i className="w-6 h-6 text-slate-900" data-lucide="sprout" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Fresh Ingredients</h3>
<p className="text-lg text-slate-600 leading-relaxed">We focus on quality produce and ingredients that bring every dish to life, working with trusted suppliers.</p>
</div>
</div>

<div className="flex gap-6">
<div className="shrink-0 mt-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
<i className="w-6 h-6 text-slate-900" data-lucide="message-circle-heart" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Made for Sharing</h3>
<p className="text-lg text-slate-600 leading-relaxed">Our menu is designed for connection, conversation, and memorable moments around the table.</p>
</div>
</div>

<div className="flex gap-6">
<div className="shrink-0 mt-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
<i className="w-6 h-6 text-slate-900" data-lucide="smile" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Friendly Experience</h3>
<p className="text-lg text-slate-600 leading-relaxed">From your first click online to your final bite in the café, our team makes every customer feel genuinely welcome.</p>
</div>
</div>

<div className="flex gap-6">
<div className="shrink-0 mt-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
<i className="w-6 h-6 text-slate-900" data-lucide="layers" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Flexible Dining Options</h3>
<p className="text-lg text-slate-600 leading-relaxed">Dine in, order online, reserve ahead, or cater your next event with ease. We adapt to your schedule.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white px-6 border-b border-slate-100">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-24">
<h2 className="text-2xl font-medium tracking-tight text-slate-400 mb-10">Loved by Locals. Featured by Critics.</h2>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">

<span className="text-2xl font-semibold tracking-tighter">The Foodie</span>
<span className="text-2xl font-serif italic tracking-tight">Local Eats</span>
<span className="text-2xl font-medium uppercase tracking-widest">Culture Guide</span>
<span className="text-2xl font-semibold tracking-tight">Daily Brew</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">What Our Guests Are Saying</h2>
<a className="inline-flex items-center gap-2 text-slate-900 font-medium text-lg hover:text-rose-600 transition-colors group shrink-0" href="#">
                    Read More Reviews
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#F8F7F5] p-10 rounded-[2rem]">
<div className="flex text-amber-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-8">“Beautiful presentation, amazing flavours, and one of the most welcoming café experiences we’ve had in a long time.”</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
<img alt="Sarah J." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="font-medium text-slate-900">Sarah J.</h4>
<span className="text-sm text-slate-500">Local Guide</span>
</div>
</div>
</div>

<div className="bg-[#F8F7F5] p-10 rounded-[2rem]">
<div className="flex text-amber-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-8">“The perfect place for brunch and coffee. Great atmosphere, friendly team, and consistently delicious food.”</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
<img alt="Marcus T." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="font-medium text-slate-900">Marcus T.</h4>
<span className="text-sm text-slate-500">Regular Guest</span>
</div>
</div>
</div>

<div className="bg-[#F8F7F5] p-10 rounded-[2rem]">
<div className="flex text-amber-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-8">“We used Social Brew Café for catering and everything was fresh, on time, and loved by everyone at the meeting.”</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
<img alt="Emma W." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="font-medium text-slate-900">Emma W.</h4>
<span className="text-sm text-slate-500">Corporate Client</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">A Taste of the Experience</h2>
<p className="text-lg text-slate-600 mb-8">Take a closer look at our signature dishes, vibrant drinks, warm interiors, and the everyday moments that make Social Brew Café special.</p>
<a className="inline-flex bg-white border border-slate-200 text-slate-900 text-lg font-medium px-8 py-3 rounded-full hover:bg-slate-50 transition-colors" href="#">
                    Browse Gallery
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">

<div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden group relative">
<img alt="Café Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="rounded-[2rem] overflow-hidden group relative">
<img alt="Coffee Pour" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>

<div className="rounded-[2rem] overflow-hidden group relative">
<img alt="Food Plate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>

<div className="rounded-[2rem] overflow-hidden group relative">
<img alt="Barista" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>

<div className="rounded-[2rem] overflow-hidden group relative">
<img alt="Latte Art" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F8F7F5] px-6" id="reservations">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">Reserve Your Table</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Planning breakfast, brunch, lunch, or a catch-up with friends? Reserve your table in advance and enjoy a smooth, stress-free dining experience.
                </p>
</div>
<form className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-10">

<div className="relative">
<label className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2 block">Name</label>
<input className="w-full text-lg border-b border-slate-200 py-3 bg-transparent focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300" placeholder="John Doe" type="text"/>
</div>

<div className="relative">
<label className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2 block">Phone / Email</label>
<input className="w-full text-lg border-b border-slate-200 py-3 bg-transparent focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300" placeholder="Contact Details" type="text"/>
</div>

<div className="relative">
<label className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2 block">Date</label>
<input className="w-full text-lg border-b border-slate-200 py-3 bg-transparent focus:outline-none focus:border-slate-900 transition-colors text-slate-900 appearance-none" type="date"/>
</div>

<div className="grid grid-cols-2 gap-8">
<div className="relative">
<label className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2 block">Time</label>
<div className="relative">
<select className="w-full text-lg border-b border-slate-200 py-3 bg-transparent focus:outline-none focus:border-slate-900 transition-colors text-slate-900 appearance-none cursor-pointer pr-8">
<option>09:00 AM</option>
<option>10:00 AM</option>
<option>11:00 AM</option>
<option>12:00 PM</option>
<option>01:00 PM</option>
</select>
<i className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative">
<label className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2 block">Guests</label>
<div className="relative">
<select className="w-full text-lg border-b border-slate-200 py-3 bg-transparent focus:outline-none focus:border-slate-900 transition-colors text-slate-900 appearance-none cursor-pointer pr-8">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5+ People</option>
</select>
<i className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative md:col-span-2">
<label className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2 block">Special Requests (Optional)</label>
<input className="w-full text-lg border-b border-slate-200 py-3 bg-transparent focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300" placeholder="Dietary requirements, seating preference, etc." type="text"/>
</div>
</div>
<div className="text-center">
<button className="w-full md:w-auto bg-slate-900 text-white text-lg font-medium px-12 py-4 rounded-full hover:bg-slate-800 transition-colors" type="button">
                        Book Now
                    </button>
</div>
</form>
</div>
</section>

<section className="py-24 bg-white px-6 border-b border-slate-100">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Host Your Next Event With Us</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Looking for a stylish, welcoming venue for your next gathering? Social Brew Café is a great choice for birthdays, casual celebrations, team lunches, and small private events. Our team can help with food, drinks, seating, and personalised arrangements to make it special.
                    </p>
<a className="inline-flex bg-white border border-slate-200 text-slate-900 text-lg font-medium px-8 py-4 rounded-full hover:bg-slate-50 transition-colors" href="#">
                        Enquire About Events
                    </a>
</div>
<div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100">
<img alt="Private Event Table" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F7F5] px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Visit Social Brew Café</h2>
<p className="text-lg text-slate-600 mb-10">
                    Conveniently located and easy to find, we are your neighbourhood destination for coffee, brunch, lunch, and catered events.
                </p>
<div className="space-y-8 mb-10">
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-400 shrink-0 mt-1" data-lucide="map-pin" strokeWidth="1.5"></i>
<div>
<h4 className="font-medium text-slate-900 mb-1">Address</h4>
<p className="text-lg text-slate-600">123 Brew Avenue<br/>Coffee District, CD 4000</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-400 shrink-0 mt-1" data-lucide="clock" strokeWidth="1.5"></i>
<div>
<h4 className="font-medium text-slate-900 mb-1">Opening Hours</h4>
<p className="text-lg text-slate-600">Mon - Fri: 7:00 AM - 4:00 PM<br/>Sat - Sun: 8:00 AM - 5:00 PM</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-400 shrink-0 mt-1" data-lucide="phone" strokeWidth="1.5"></i>
<div>
<h4 className="font-medium text-slate-900 mb-1">Contact</h4>
<p className="text-lg text-slate-600">hello@socialbrewcafe.com<br/>(555) 123-4567</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-100 mb-8 flex items-start gap-4">
<i className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" data-lucide="car" strokeWidth="1.5"></i>
<p className="text-slate-600 text-sm">Ample street parking available. Close to main public transport links.</p>
</div>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-slate-800 transition-colors" href="#">
                    Get Directions
                </a>
</div>

<div className="lg:col-span-7">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Follow the Café Vibe</h2>
<p className="text-slate-600">Join our community on Instagram.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700 transition-colors" href="#">
                        @socialbrewcafe
                    </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden relative group">
<img alt="Instagram Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
</div>
<div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden relative group">
<img alt="Instagram Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
</div>
<div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden relative group hidden md:block">
<img alt="Instagram Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
</div>
<div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden relative group hidden md:block">
<img alt="Instagram Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
</div>
<div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden relative group hidden md:block col-span-2">
<img alt="Instagram Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6">
<div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-rose-600/20 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Stay in the Loop</h2>
<p className="text-lg text-slate-300 mb-10">
                    Be the first to hear about new menu items, special offers, exclusive events, and café updates.
                </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 bg-white/10 border border-white/20 text-white rounded-full px-6 py-4 focus:outline-none focus:border-rose-500 transition-colors placeholder:text-slate-400 text-lg" placeholder="Enter your email address" type="email"/>
<button className="bg-rose-600 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-rose-700 transition-colors shrink-0" type="button">
                        Subscribe
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

<div className="lg:col-span-2">
<a className="flex items-center font-semibold tracking-tighter text-2xl mb-6" href="#">
<span className="text-slate-900">SOCIAL</span>
<div className="flex flex-col text-[10px] leading-[9px] text-rose-600 font-semibold mx-1 justify-center tracking-normal uppercase">
<span>B</span><span>R</span><span>E</span><span>W</span>
</div>
<span className="text-slate-900">CAFÉ</span>
</a>
<p className="text-slate-500 text-lg max-w-sm mb-8">
                        Creating great connections over fresh flavours, artisan coffee, and memorable moments.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h4 className="font-medium text-slate-900 mb-6">Explore</h4>
<ul className="space-y-4">
<li><a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Home</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Menu</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Gallery</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-slate-900 mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Catering</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Delivery</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Reservations</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Private Events</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-slate-900 mb-6">Contact</h4>
<ul className="space-y-4 text-slate-500">
<li>hello@socialbrewcafe.com</li>
<li>(555) 123-4567</li>
<li className="pt-4">
                            123 Brew Avenue<br/>
                            Coffee District, CD 4000
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 text-sm text-slate-400 gap-4">
<p>© 2023 Social Brew Café. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
