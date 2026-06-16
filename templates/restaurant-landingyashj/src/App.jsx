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
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
},
amber: {
500: '#f59e0b',
600: '#d97706',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 glass-panel border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<span className="text-2xl font-semibold text-stone-900 tracking-tighter font-serif">CBR</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#about">Story</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#contact">Location</a>
</div>

<div className="flex items-center space-x-4">
<button className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors group">
<iconify-icon height="24" icon="solar:cart-large-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-1 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-medium text-white bg-amber-600 rounded-full border-2 border-white group-hover:bg-amber-700 transition-colors">2</span>
</button>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900" href="#order">
                        Order Online
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-900" id="home">

<div className="absolute inset-0 z-0">
<img alt="Fine dining restaurant interior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2069&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="flex text-amber-500">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-200 tracking-wide uppercase">4.8 Rating • 500+ Reviews</span>
</div>
<h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 max-w-5xl leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Authentic Taste in the <span className="text-amber-500 italic">Heart</span> of Montreal
            </h1>
<p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl font-light animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                Experience culinary excellence with locally sourced Canadian ingredients, crafted to perfection in an elegant, modern setting.
            </p>
<div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-stone-900 bg-white rounded-xl hover:bg-stone-100 transition-all shadow-lg shadow-white/10" href="#menu">
                    View Menu
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm" href="#order">
                    Order Online
                    <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon height="24" icon="solar:mouse-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 lg:py-32 bg-stone-50 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative grid grid-cols-2 gap-4">
<img alt="Chef preparing food" className="rounded-2xl w-full h-80 object-cover mt-8 shadow-sm" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Perfectly cooked steak" className="rounded-2xl w-full h-80 object-cover shadow-sm" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-full -z-10 blur-2xl opacity-60"></div>
</div>

<div className="max-w-xl">
<span className="text-amber-600 font-medium text-sm tracking-wide uppercase mb-3 block">Our Story</span>
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mb-6">
                        A Culinary Journey Born in Quebec
                    </h2>
<p className="text-base text-stone-600 mb-6 leading-relaxed">
                        Founded in 2015, Canada Best Restaurant began with a simple mission: to elevate traditional Canadian ingredients with modern gastronomic techniques. Nestled in the vibrant city of Montreal, we blend the warmth of Quebecois hospitality with world-class culinary execution.
                    </p>
<p className="text-base text-stone-600 mb-8 leading-relaxed">
                        Executive Chef Jean-Paul curates seasonal menus that celebrate local farmers, premium cuts, and fresh seafood from the coast, ensuring every dish tells a story of quality and passion.
                    </p>
<div className="flex items-center gap-6 pt-6 border-t border-stone-200">
<div className="flex -space-x-3">
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center text-xs font-medium text-stone-600">+1k</div>
</div>
<p className="text-sm font-medium text-stone-900">Loved by locals &amp; tourists alike.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 text-stone-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-stone-800 rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
<div className="inline-flex items-center gap-2 text-amber-500 mb-4">
<iconify-icon height="20" icon="solar:fire-bold" width="20"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase">Chef's Special</span>
</div>
<h3 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                            Truffle Infused Ribeye
                        </h3>
<p className="text-stone-400 text-base mb-8 max-w-md">
                            Prime Alberta beef, dry-aged for 45 days, seared to perfection and finished with black truffle butter and wild mushrooms.
                        </p>
<div className="flex items-center gap-4">
<span className="text-2xl font-semibold text-white">$65.00</span>
<button className="px-6 py-3 text-sm font-medium text-stone-900 bg-amber-500 rounded-xl hover:bg-amber-400 transition-colors">
                                Add to Order
                            </button>
</div>
</div>
<div className="relative h-64 md:h-auto">
<img alt="Ribeye Steak" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Explore Our Menu</h2>
<p className="text-base text-stone-500">Discover our carefully curated selection of dishes, prepared with the finest ingredients and culinary expertise.</p>
</div>

<div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2 mb-12 pb-4">
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-medium transition-all shadow-sm">All Dishes</button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200 text-sm font-medium transition-all">Starters</button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200 text-sm font-medium transition-all">Main Course</button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200 text-sm font-medium transition-all">BBQ</button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200 text-sm font-medium transition-all">Desserts</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="relative h-56 overflow-hidden">
<img alt="Beef Tartare" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560684352-8497838a2229?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-stone-900 shadow-sm">$24</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight text-stone-900">Classic Beef Tartare</h3>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Hand-cut tenderloin, capers, shallots, Dijon, egg yolk, served with artisan crostini.</p>
<button className="w-full py-2.5 px-4 rounded-lg border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Order Now
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="relative h-56 overflow-hidden">
<img alt="Ribeye" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-stone-900 shadow-sm">$65</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight text-stone-900">Alberta Prime Ribeye</h3>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">14oz dry-aged cut, roasted garlic butter, blistered vine tomatoes, hand-cut frites.</p>
<button className="w-full py-2.5 px-4 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-sm">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Order Now
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="relative h-56 overflow-hidden">
<img alt="Pasta" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-stone-900 shadow-sm">$32</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight text-stone-900">Truffle Mushroom Linguine</h3>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Handmade pasta, wild mushrooms, black truffle shavings, Parmigiano-Reggiano.</p>
<button className="w-full py-2.5 px-4 rounded-lg border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Order Now
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="relative h-56 overflow-hidden">
<img alt="Salmon" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-stone-900 shadow-sm">$38</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight text-stone-900">Atlantic Salmon</h3>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Pan-seared, quinoa pilaf, grilled asparagus, lemon-dill beurre blanc.</p>
<button className="w-full py-2.5 px-4 rounded-lg border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Order Now
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="relative h-56 overflow-hidden">
<img alt="Burger" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-stone-900 shadow-sm">$26</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight text-stone-900">CBR Signature Burger</h3>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Wagyu beef patty, aged cheddar, caramelized onions, house sauce, brioche bun.</p>
<button className="w-full py-2.5 px-4 rounded-lg border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Order Now
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="relative h-56 overflow-hidden">
<img alt="Dessert" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-stone-900 shadow-sm">$14</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight text-stone-900">Dark Chocolate Lava Cake</h3>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Warm molten center, Madagascar vanilla bean ice cream, seasonal berries.</p>
<button className="w-full py-2.5 px-4 rounded-lg border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Order Now
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="order">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Complete Your Order</h2>
<p className="text-base text-stone-500">Secure checkout powered by modern payment technology.</p>
</div>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

<div className="w-full lg:w-5/12 order-2 lg:order-1">
<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200 sticky top-28">
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-6">Order Summary</h3>
<div className="space-y-4 mb-6">

<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100">
<img alt="Ribeye" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex-grow">
<h4 className="text-sm font-medium text-stone-900">Alberta Prime Ribeye</h4>
<p className="text-xs text-stone-500">Medium Rare</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-stone-900">$65.00</p>
<p className="text-xs text-stone-400">Qty: 1</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100">
<img alt="Cake" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex-grow">
<h4 className="text-sm font-medium text-stone-900">Chocolate Lava Cake</h4>
<p className="text-xs text-stone-500">Extra ice cream</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-stone-900">$14.00</p>
<p className="text-xs text-stone-400">Qty: 1</p>
</div>
</div>
</div>

<div className="border-t border-stone-100 pt-4 space-y-2">
<div className="flex justify-between text-sm text-stone-500">
<span>Subtotal</span>
<span>$79.00</span>
</div>
<div className="flex justify-between text-sm text-stone-500">
<span>Taxes (QST/GST)</span>
<span>$11.83</span>
</div>
<div className="flex justify-between text-sm text-stone-500">
<span>Delivery Fee</span>
<span>$4.99</span>
</div>
</div>
<div className="border-t border-stone-100 mt-4 pt-4 flex justify-between items-center">
<span className="text-base font-semibold text-stone-900">Total</span>
<span className="text-xl font-semibold tracking-tight text-stone-900">$95.82</span>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 order-1 lg:order-2">
<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
<form className="" onsubmit="event.preventDefault();">

<div className="mb-8">
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-4">Contact Information</h3>
<div className="space-y-4">
<div className="">
<label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="email">Email address</label>
<input className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" id="email" placeholder="you@example.com" type="email"/>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-4">Delivery Details</h3>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="fname">First name</label>
<input className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" id="fname" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="lname">Last name</label>
<input className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" id="lname" type="text"/>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="address">Address</label>
<input className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" id="address" placeholder="123 Main St, Apt 4B" type="text"/>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-4">Payment Method</h3>
<div className="bg-stone-50 rounded-lg border border-stone-200 p-4 mb-4">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-stone-500" height="20" icon="solar:card-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-900">Credit Card</span>
</div>
<div className="space-y-3">
<div>
<div className="relative">
<input className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors font-mono" placeholder="0000 0000 0000 0000" type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-stone-400">
<iconify-icon height="16" icon="solar:lock-password-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<input className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" placeholder="MM / YY" type="text"/>
<input className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" placeholder="CVC" type="text"/>
</div>
</div>
</div>
<div className="flex items-start gap-3 mt-4">
<input className="custom-checkbox mt-0.5" id="save-info" type="checkbox"/>
<label className="text-sm text-stone-600 cursor-pointer select-none" htmlFor="save-info">Save this information for next time</label>
</div>
</div>
<button className="w-full py-3.5 px-4 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 flex justify-center items-center gap-2" type="submit">
<iconify-icon height="18" icon="solar:lock-keyhole-minimalistic-linear" width="18"></iconify-icon>
                                Pay $95.82
                            </button>
<p className="text-center text-xs text-stone-400 mt-4 flex items-center justify-center gap-1">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
                                Secure 256-bit encrypted payment
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-2">Atmosphere &amp; Art</h2>
<p className="text-base text-stone-500">Follow us on Instagram <a className="text-amber-600 hover:text-amber-700 font-medium" href="#">@canadabestmtl</a></p>
</div>
<div className="hidden sm:flex gap-2">
<button className="p-2 rounded-full border border-stone-200 text-stone-500 hover:bg-stone-50 transition-colors">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="p-2 rounded-full border border-stone-200 text-stone-500 hover:bg-stone-50 transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative">
<img alt="Restaurant interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" height="32" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
</div>
<div className="rounded-2xl overflow-hidden group relative">
<img alt="Dish plating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="rounded-2xl overflow-hidden group relative">
<img alt="Dessert detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="col-span-2 rounded-2xl overflow-hidden group relative">
<img alt="Cocktails" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 border-y border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<iconify-icon className="text-amber-200 mb-6" height="48" icon="solar:quote-left-bold-duotone" width="48"></iconify-icon>
<h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 max-w-4xl mx-auto leading-relaxed mb-8">
                "An absolute gem in Montreal. The ambiance is sophisticated yet welcoming, and the dry-aged ribeye is undoubtedly the best I've had in Canada. A truly premium dining experience."
            </h2>
<div className="flex flex-col items-center">
<div className="flex text-amber-500 mb-3">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm font-semibold text-stone-900">Sarah Jenkins</p>
<p className="text-xs text-stone-500">Local Food Critic</p>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16">

<div className="">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-2">Book a Table</h2>
<p className="text-base text-stone-500 mb-8">Reserve your spot for an unforgettable dining experience.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-stone-700 mb-1">Date</label>
<div className="relative">
<input className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors text-stone-600" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1">Time</label>
<select className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors text-stone-600 appearance-none">
<option>18:00 PM</option>
<option>18:30 PM</option>
<option>19:00 PM</option>
<option>19:30 PM</option>
<option>20:00 PM</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-stone-700 mb-1">Guests</label>
<select className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors text-stone-600 appearance-none">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5+ People</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1">Name</label>
<input className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-stone-700 mb-1">Email or Phone</label>
<input className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors" placeholder="Contact info" type="text"/>
</div>
<button className="w-full py-3 px-4 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors mt-4" type="button">
                            Request Reservation
                        </button>
</form>
</div>

<div className="flex flex-col h-full">
<div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 mb-6 flex flex-col sm:flex-row justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-2 text-stone-900">
<iconify-icon className="text-amber-600" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<h4 className="font-semibold text-sm">Location</h4>
</div>
<p className="text-sm text-stone-600">997 Av. Ogilvy<br/>Montréal, QC H3N 1P4<br/>Canada</p>
</div>
<div>
<div className="flex items-center gap-2 mb-2 text-stone-900">
<iconify-icon className="text-amber-600" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<h4 className="font-semibold text-sm">Hours</h4>
</div>
<p className="text-sm text-stone-600">Mon - Fri: 5PM - 11PM<br/>Sat - Sun: 4PM - 12AM</p>
</div>
<div>
<div className="flex items-center gap-2 mb-2 text-stone-900">
<iconify-icon className="text-amber-600" height="20" icon="solar:phone-linear" width="20"></iconify-icon>
<h4 className="font-semibold text-sm">Contact</h4>
</div>
<p className="text-sm text-stone-600">+1 (514) 555-0198<br/>hello@cbrestaurant.ca</p>
</div>
</div>

<div className="flex-grow rounded-2xl overflow-hidden bg-stone-200 border border-stone-200 min-h-[250px] relative">
<iframe allowfullscreen="" className="absolute inset-0 grayscale contrast-125 opacity-80" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.7554900742517!2d-73.6288869233633!3d45.53512807107474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9190ab7a2ba89%3A0xc6c4f5f5c40467b!2s997%20Av.%20Ogilvy%2C%20Montr%C3%A9al%2C%20QC%20H3N%201P4%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="font-serif font-semibold text-3xl tracking-tighter text-white mb-6 block">CBR</span>
<p className="text-stone-400 text-sm max-w-sm mb-6 leading-relaxed">
                        Redefining the Canadian dining experience with locally sourced ingredients, masterful preparation, and an atmosphere of modern elegance in Montreal.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon height="18" icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon height="18" icon="solar:map-arrow-up-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-400 hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="text-sm text-stone-400 hover:text-white transition-colors" href="#about">Our Story</a></li>
<li><a className="text-sm text-stone-400 hover:text-white transition-colors" href="#menu">Menus</a></li>
<li><a className="text-sm text-stone-400 hover:text-white transition-colors" href="#order">Order Online</a></li>
<li><a className="text-sm text-stone-400 hover:text-white transition-colors" href="#contact">Reservations</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-stone-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-stone-400 hover:text-white transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-500">© 2023 Canada Best Restaurant. All rights reserved.</p>
<div className="flex items-center gap-2 text-stone-500 text-xs">
<span>Designed with</span>
<iconify-icon className="text-stone-600" height="14" icon="solar:heart-bold" width="14"></iconify-icon>
<span>in Montreal</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
