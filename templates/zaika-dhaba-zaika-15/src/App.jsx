import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      function switchMenu(type) {
          const btnVeg = document.getElementById('btn-veg');
          const btnNonVeg = document.getElementById('btn-nonveg');
          const menuVeg = document.getElementById('menu-veg');
          const menuNonVeg = document.getElementById('menu-nonveg');

          if (type === 'veg') {
              // Style Buttons
              btnVeg.className = "px-6 py-2.5 rounded-lg text-sm font-medium transition-all bg-green-100 text-green-800 shadow-sm flex items-center gap-2";
              btnNonVeg.className = "px-6 py-2.5 rounded-lg text-sm font-medium transition-all text-stone-500 hover:text-stone-900 flex items-center gap-2";

              // Show/Hide Content
              menuVeg.classList.remove('hidden');
              menuNonVeg.classList.add('hidden');
          } else {
              // Style Buttons
              btnVeg.className = "px-6 py-2.5 rounded-lg text-sm font-medium transition-all text-stone-500 hover:text-stone-900 flex items-center gap-2";
              btnNonVeg.className = "px-6 py-2.5 rounded-lg text-sm font-medium transition-all bg-red-100 text-red-800 shadow-sm flex items-center gap-2";

              // Show/Hide Content
              menuVeg.classList.add('hidden');
              menuNonVeg.classList.remove('hidden');
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="iconify text-orange-600 group-hover:rotate-12 transition-transform duration-300" data-icon="lucide:flame" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl tracking-tight font-semibold text-stone-900 uppercase">
            Zaika
            <span className="text-orange-600">.</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors" href="#about">
            Our Story
          </a>
<a className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors" href="#menu">
            Menu
          </a>
<a className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors" href="#gallery">
            Gallery
          </a>
<a className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors" href="#contact">
            Contact
          </a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-orange-600" href="tel:+919024496686">
<span className="iconify" data-icon="lucide:phone" style={{strokeWidth: '1.5'}}></span>
<span>+91 90244 96686</span>
</a>
<a className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow-md flex items-center gap-2" href="#order">
            Order Now
            <span className="iconify" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>

<button className="md:hidden text-stone-900 p-1 rounded-md hover:bg-stone-100" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-stone-50 border-b border-stone-200 p-6 flex flex-col gap-4 shadow-lg" id="mobile-menu">
<a className="text-base font-medium text-stone-600" href="#about">
          Our Story
        </a>
<a className="text-base font-medium text-stone-600" href="#menu">Menu</a>
<a className="text-base font-medium text-stone-600" href="#gallery">
          Gallery
        </a>
<a className="text-base font-medium text-stone-600" href="#contact">
          Contact
        </a>
<a className="bg-stone-900 text-white text-center py-3 rounded-lg font-medium" href="tel:+919024496686">
          Call Now
        </a>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-stone-900">

<div className="absolute inset-0 z-0">
<img alt="Indian Spices and Food" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1517244683847-745431d57ede?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-200 text-xs font-medium tracking-wide mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          OPEN FOR DINE-IN &amp; DELIVERY
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-4">
          Taste of Tradition,
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
            Heart of Pilani.
          </span>
</h1>
<p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-2">
          “जहां स्वाद है, वहीं हम हैं।”
        </p>
<p className="max-w-lg mx-auto text-stone-400 text-sm md:text-base leading-relaxed mb-10">
          Experience authentic rustic flavors at Zaika Dhaba. From buttery
          Paneer to smoky Tandoori Chicken, we serve happiness on a plate.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-orange-600/25 flex items-center justify-center gap-2 group" href="#menu">
            View Full Menu
            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:utensils" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-lg font-medium transition-all border border-stone-700 flex items-center justify-center gap-2" href="https://wa.me/919024496686">
<span className="iconify" data-icon="lucide:message-circle" style={{strokeWidth: '1.5'}}></span>
            Order on WhatsApp
          </a>
</div>
</div>
</header>

<section className="py-20 md:py-28 bg-white relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
<div className="space-y-6">
<div className="flex items-center gap-2 text-orange-600 font-medium text-sm tracking-wide uppercase">
<span className="h-px w-8 bg-orange-600"></span>
            About Our Dhaba
          </div>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
            Authentic Flavors,
            <br/>
            Homely Feeling.
          </h2>
<p className="text-stone-600 leading-relaxed">
            Located on Khedla Road near NL Hotel,
            <strong>Zaika Veg &amp; Non-Veg Dhaba</strong>
            is more than just a place to eat; it's a culinary journey. Founded
            by
            <strong>Tanuj Rajput</strong>
            , our mission is simple: to serve food that tastes like home but
            feels like a celebration.
          </p>
<p className="text-stone-600 leading-relaxed">
            We use locally sourced spices, traditional clay ovens (tandoors),
            and recipes passed down through generations to create the perfect
            thalis, biryanis, and curries. Whether you crave a spicy Chicken
            Curry or a comforting Dal Tadka, Zaika is the place to be.
          </p>
<div className="pt-4 grid grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<span className="iconify text-orange-600" data-icon="lucide:chef-hat" data-width="28" style={{strokeWidth: '1.5'}}></span>
<h4 className="font-semibold text-stone-900">Expert Chefs</h4>
<p className="text-xs text-stone-500">
                Masters of traditional cooking methods.
              </p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify text-orange-600" data-icon="lucide:leaf" data-width="28" style={{strokeWidth: '1.5'}}></span>
<h4 className="font-semibold text-stone-900">Fresh Ingredients</h4>
<p className="text-xs text-stone-500">
                Farm-fresh vegetables and quality meats.
              </p>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white ring-1 ring-stone-200">
<img alt="Zaika Dhaba Rustic Seating" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1623475151042-45236f0148da?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-stone-900 text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
<p className="text-2xl font-serif font-bold text-orange-400">100%</p>
<p className="text-sm text-stone-300 mt-1">
              Authentic Desi Ghee Preparation Available
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50" id="menu">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-orange-600 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Our Specialties
          </span>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight mb-4">
            Explore Our Menu
          </h2>
<p className="text-stone-600">
            From the clay oven to your plate. Choose your preference below.
          </p>
</div>

<div className="flex justify-center mb-12">
<div className="bg-white p-1 rounded-xl shadow-sm border border-stone-200 inline-flex">
<button className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all bg-green-100 text-green-800 shadow-sm flex items-center gap-2" id="btn-veg" onclick="switchMenu('veg')">
<span className="w-2 h-2 rounded-full bg-green-600"></span>
              Veg Menu
            </button>
<button className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all text-stone-500 hover:text-stone-900 flex items-center gap-2" id="btn-nonveg" onclick="switchMenu('nonveg')">
<span className="w-2 h-2 rounded-full bg-red-600"></span>
              Non-Veg Menu
            </button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" id="menu-veg">

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4 relative">
<img alt="Veg Thali" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                Bestseller
              </span>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">
                Special Veg Thali
              </h3>
<span className="text-orange-600 font-bold">₹180</span>
</div>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">
              Seasonal Sabzi, Paneer, Dal, Rice, 4 Roti, Salad, Raita &amp;
              Sweet.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4">
<img alt="Paneer Butter Masala" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">
                Paneer Butter Masala
              </h3>
<span className="text-orange-600 font-bold">₹220</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Cottage cheese cubes simmered in a rich, buttery tomato gravy.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4">
<img alt="Dal Fry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">Dal Tadka</h3>
<span className="text-orange-600 font-bold">₹140</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Yellow lentils tempered with cumin, garlic, and dried red chilies.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4">
<img alt="Paneer Tikka" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1668236599198-3610991e5c46?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">Paneer Tikka</h3>
<span className="text-orange-600 font-bold">₹200</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Marinated paneer cubes grilled to perfection in a tandoor.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4">
<img alt="Kadhi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574315042610-7456bc35326b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">
                Rajasthani Kadhi
              </h3>
<span className="text-orange-600 font-bold">₹130</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Spiced yogurt curry with gram flour dumplings.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4">
<img alt="Gulab Jamun" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593701461250-d716e01b2f43?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">
                Gulab Jamun (2pcs)
              </h3>
<span className="text-orange-600 font-bold">₹60</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Soft, sweet dumplings soaked in rose-flavored sugar syrup.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>
</div>

<div className="hidden grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" id="menu-nonveg">

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4 relative">
<img alt="Tandoori Chicken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                Chef Special
              </span>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">
                Tandoori Chicken
              </h3>
<span className="text-orange-600 font-bold">₹350</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Whole chicken marinated in yogurt and spices, roasted in tandoor.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4">
<img alt="Chicken Biryani" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">
                Chicken Biryani
              </h3>
<span className="text-orange-600 font-bold">₹280</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Aromatic basmati rice cooked with spiced chicken and herbs.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4">
<img alt="Chicken Curry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">
                Dhaba Chicken Curry
              </h3>
<span className="text-orange-600 font-bold">₹260</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Traditional desi style chicken curry with spicy gravy.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4">
<img alt="Chicken Tikka" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">
                Chicken Tikka
              </h3>
<span className="text-orange-600 font-bold">₹290</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Boneless chicken chunks marinated in spices and grilled.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>

<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="h-48 overflow-hidden rounded-xl mb-4">
<img alt="Egg Curry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591557930867-b52f1e831616?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-stone-900">Egg Curry</h3>
<span className="text-orange-600 font-bold">₹150</span>
</div>
<p className="text-stone-500 text-sm mb-4">
              Boiled eggs cooked in a flavorful tomato-onion gravy.
            </p>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
              Order Now
            </button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="gallery">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<span className="text-orange-600 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Gallery
            </span>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
              Our Atmosphere &amp; Dishes
            </h2>
</div>
<a className="text-stone-600 hover:text-orange-600 text-sm font-medium flex items-center gap-2" href="#">
            Follow us on Instagram
            <span className="iconify" data-icon="lucide:instagram" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
<div className="col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Restaurant Ambience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Rustic Ambience</span>
</div>
</div>
<div className="col-span-1 rounded-2xl overflow-hidden relative group">
<img alt="Rice" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 rounded-2xl overflow-hidden relative group">
<img alt="Tandoor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Spices" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1626776877939-22240372d3af?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50 border-y border-stone-200">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight text-center mb-12">
          Loved by Locals
        </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
<div className="flex text-orange-400 mb-4 gap-1">
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
</div>
<p className="text-stone-600 mb-4 text-sm leading-relaxed">
              "Best dhaba in Pilani! The Butter Chicken is absolutely delicious
              and the roti is always fresh. Great place for students and
              families."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">
                RK
              </div>
<span className="text-sm font-medium text-stone-900">Rahul K.</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
<div className="flex text-orange-400 mb-4 gap-1">
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
</div>
<p className="text-stone-600 mb-4 text-sm leading-relaxed">
              "Authentic taste. The vegetarian thali is very filling and
              reasonably priced. The owner Tanuj is very welcoming."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">
                AS
              </div>
<span className="text-sm font-medium text-stone-900">Amit S.</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
<div className="flex text-orange-400 mb-4 gap-1">
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-icon="lucide:star-half" style={{fill: 'currentColor', stroke: 'none'}}></span>
</div>
<p className="text-stone-600 mb-4 text-sm leading-relaxed">
              "A hidden gem on Khedla Road. Very clean for a dhaba style place.
              Sev Tamatar and Dal Fry are must-try dishes."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">
                PM
              </div>
<span className="text-sm font-medium text-stone-900">Priya M.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-8">
<div>
<span className="text-orange-600 text-sm font-semibold tracking-wider uppercase mb-2 block">
                Visit Us
              </span>
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight">
                Come Eat With Us
              </h2>
<p className="text-stone-600 mt-4">
                We are located in the heart of Pilani. Drop by for a meal or
                order online.
              </p>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
<span className="iconify" data-icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="font-semibold text-stone-900">Address</h4>
<p className="text-stone-600 text-sm">
                    Near NL Hotel, Khedla Road,
                    <br/>
                    Pilani, Rajasthan – 333031
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
<span className="iconify" data-icon="lucide:phone" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="font-semibold text-stone-900">Contact</h4>
<p className="text-stone-600 text-sm">Tanuj Rajput</p>
<a className="text-stone-900 font-medium hover:text-orange-600 text-sm" href="tel:+919024496686">
                    +91 90244 96686
                  </a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
<span className="iconify" data-icon="lucide:clock" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="font-semibold text-stone-900">Opening Hours</h4>
<p className="text-stone-600 text-sm">
                    Mon - Sun: 11:00 AM - 11:00 PM
                  </p>
</div>
</div>
</div>
<div className="flex gap-4 pt-4">
<a className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors" href="https://wa.me/919024496686">
<span className="iconify" data-icon="lucide:message-circle" style={{strokeWidth: '1.5'}}></span>
                WhatsApp Order
              </a>
<a className="flex-1 border border-stone-200 hover:bg-stone-50 text-stone-900 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors" href="tel:+919024496686">
<span className="iconify" data-icon="lucide:phone-call" style={{strokeWidth: '1.5'}}></span>
                Call Now
              </a>
</div>
</div>

<div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-stone-100 bg-stone-200 relative">
<iframe allowfullscreen="" className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.679770566373!2d75.5996!3d28.3689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391379c6d4d4205d%3A0x6a1a1b1b1b1b1b1b!2sPilani%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>

</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h3 className="text-white text-xl font-bold tracking-tight mb-2">
              Zaika Dhaba
            </h3>
<p className="text-sm">
              Authentic Veg &amp; Non-Veg Cuisine in Pilani.
            </p>
</div>
<div className="flex gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">
              About
            </a>
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#contact">
              Contact
            </a>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all" href="#">
<span className="iconify" data-icon="lucide:facebook" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div className="border-t border-stone-800 mt-8 pt-8 text-center text-xs text-stone-500">
          © 2023 Zaika Dhaba. All rights reserved. Designed for Pilani.
        </div>
</div>
</footer>



    </>
  );
}
