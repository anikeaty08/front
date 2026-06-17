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



        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            drawer.classList.toggle('open');
            if (drawer.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        function toggleAdmin() {
            const modal = document.getElementById('admin-modal');
            modal.classList.toggle('open');
            if (modal.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    
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
      

<nav className="fixed w-full z-40 top-0 border-b backdrop-blur-md border-indigo-800/60 bg-black/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="lg:hidden p-2 text-indigo-500 hover:text-indigo-100">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="text-xl font-semibold tracking-tighter flex items-center gap-2 font-jakarta" href="#" style={{}}>
<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-black font-jakarta" style={{}}>W</div>
                WONDER.
            </a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-indigo-500">
<a className="transition-colors text-indigo-100 hover:text-blue-400 font-jakarta" href="#" style={{}}>Shop</a>
<a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>New Arrivals</a>
<a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>Ages</a>
<a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>Brands</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-indigo-500 transition-colors hover:text-indigo-100">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative p-2 text-indigo-500 transition-colors hover:text-indigo-100" onclick="toggleCart()">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-black"></span>
</button>
</div>
</div>
</nav>

<main className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6">

<section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
<div className="space-y-8 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium border-indigo-800 bg-black text-indigo-400 font-jakarta" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-600"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    New Spring Collection 2024
                </div>
<h1 className="text-5xl lg:text-7xl tracking-tight leading-[1.1] text-indigo-100 font-bricolage font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Play is the <br/>
<span className="text-indigo-600 font-bricolage font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>highest form</span> <br/>
                    of research.
                </h1>
<p className="text-lg text-indigo-500 max-w-md leading-relaxed font-jakarta" style={{}}>
                    Curated educational toys designed to spark creativity, logic, and joy in children of all ages. Sustainable materials, timeless design.
                </p>
<div className="flex items-center gap-4">
<button className="px-6 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-2 group bg-indigo-100 text-black hover:bg-indigo-200 font-jakarta" onclick="toggleCart()" style={{}}>
                        Shop Collection
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-lg text-sm font-medium transition-colors text-indigo-400 hover:bg-indigo-900 font-jakarta" style={{}}>
                        View Lookbook
                    </button>
</div>
</div>
<div className="relative order-1 lg:order-2">
<div className="aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden relative group bg-indigo-900">
<img alt="Wooden toys" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-3xl ring-white/5"></div>
<div className="absolute bottom-6 left-6 right-6 backdrop-blur-sm p-4 rounded-xl border shadow-lg flex items-center justify-between bg-black/90 border-black/20">
<div>
<p className="text-xs text-indigo-500 mb-0.5 font-jakarta" style={{}}>Best Seller</p>
<p className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>Nordic Wooden Stacker</p>
</div>
<span className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>$45.00</span>
</div>
</div>
<div className="absolute -z-10 -top-8 -right-8 w-64 h-64 rounded-full blur-3xl opacity-50 bg-blue-900"></div>
<div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 rounded-full blur-3xl opacity-50 bg-green-900"></div>
</div>
</section>

<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 space-y-10 shrink-0">
<div>
<h3 className="text-sm font-medium mb-6 text-indigo-100 font-jakarta" style={{}}>Categories</h3>
<ul className="space-y-3 text-sm text-indigo-500">
<li><a className="font-medium flex items-center justify-between group text-indigo-100 font-jakarta" href="#" style={{}}>
                            All Toys <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600" icon="lucide:chevron-right" width="16"></iconify-icon>
</a></li>
<li><a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>Wooden Sets</a></li>
<li><a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>Soft Plush</a></li>
<li><a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>STEM &amp; Logic</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-6 text-indigo-100 font-jakarta" style={{}}>Price Range</h3>
<div className="px-1">
<input className="mb-4" max="200" min="0" type="range" value="80"/>
<div className="flex items-center justify-between text-xs text-indigo-500 font-medium">
<span className="font-jakarta" style={{}}>$0</span>
<span className="font-jakarta" style={{}}>$200+</span>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-medium mb-6 text-indigo-100 font-jakarta" style={{}}>Material</h3>
<div className="space-y-3">
<label className="custom-checkbox flex items-center cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border rounded flex items-center justify-center transition-colors group-hover:border-indigo-400 mr-3 border-indigo-700 bg-black">
<svg className="hidden w-2.5 h-2.5 pointer-events-none text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm select-none text-indigo-400 font-jakarta" style={{}}>Sustainable Wood</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border rounded flex items-center justify-center transition-colors group-hover:border-indigo-400 mr-3 border-indigo-700 bg-black">
<svg className="hidden w-2.5 h-2.5 pointer-events-none text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm select-none text-indigo-400 font-jakarta" style={{}}>Recycled Plastic</span>
</label>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex items-center justify-between mb-8">
<p className="text-sm text-indigo-500 font-jakarta" style={{}}>Showing <span className="font-medium text-indigo-100 font-jakarta" style={{}}>84</span> products</p>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-indigo-500 font-jakarta" style={{}}>Sort by:</span>
<select className="bg-transparent text-sm font-medium border-none focus:ring-0 cursor-pointer pr-6 py-0 outline-none text-indigo-100">
<option className="font-jakarta" style={{}}>Recommended</option>
<option className="font-jakarta" style={{}}>Price: Low to High</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl border overflow-hidden mb-4 bg-black border-indigo-900">
<img alt="Toy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 left-3 right-3 w-[calc(100%-1.5rem)] backdrop-blur text-xs font-medium py-2.5 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 bg-indigo-100/90 text-black font-jakarta" onclick="toggleCart()" style={{}}>
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-indigo-100 font-jakarta" style={{}}>Classic Aero Plane</h3>
<span className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>$24.00</span>
</div>
<p className="text-xs text-indigo-500 mt-1 font-jakarta" style={{}}>Recycled Plastic</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl border overflow-hidden mb-4 bg-indigo-900 border-indigo-900">
<div className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase border bg-black text-blue-400 border-blue-900 font-jakarta" style={{}}>Sale</div>
<img alt="Toy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-3 left-3 right-3 w-[calc(100%-1.5rem)] backdrop-blur text-xs font-medium py-2.5 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 bg-indigo-100/90 text-black font-jakarta" onclick="toggleCart()" style={{}}>
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-indigo-100 font-jakarta" style={{}}>Teddy 'Arthur'</h3>
<div className="flex gap-2">
<span className="text-xs line-through text-indigo-600 font-jakarta" style={{}}>$32.00</span>
<span className="text-sm font-medium text-red-400 font-jakarta" style={{}}>$28.00</span>
</div>
</div>
<p className="text-xs text-indigo-500 mt-1 font-jakarta" style={{}}>Soft Plush</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl border overflow-hidden mb-4 bg-black border-indigo-900">
<img alt="Toy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 left-3 right-3 w-[calc(100%-1.5rem)] backdrop-blur text-xs font-medium py-2.5 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 bg-indigo-100/90 text-black font-jakarta" onclick="toggleCart()" style={{}}>
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-indigo-100 font-jakarta" style={{}}>Rainbow Abacus</h3>
<span className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>$38.00</span>
</div>
<p className="text-xs text-indigo-500 mt-1 font-jakarta" style={{}}>Educational</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl border overflow-hidden mb-4 bg-black border-indigo-900">
<img alt="Toy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 left-3 right-3 w-[calc(100%-1.5rem)] backdrop-blur text-xs font-medium py-2.5 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 bg-indigo-100/90 text-black font-jakarta" onclick="toggleCart()" style={{}}>
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-indigo-100 font-jakarta" style={{}}>Wooden Camera</h3>
<span className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>$18.00</span>
</div>
<p className="text-xs text-indigo-500 mt-1 font-jakarta" style={{}}>Creative</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl border overflow-hidden mb-4 bg-black border-indigo-900">
<img alt="Toy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<button className="absolute bottom-3 left-3 right-3 w-[calc(100%-1.5rem)] backdrop-blur text-xs font-medium py-2.5 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 bg-indigo-100/90 text-black font-jakarta" onclick="toggleCart()" style={{}}>
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-indigo-100 font-jakarta" style={{}}>Building Blocks Set</h3>
<span className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>$55.00</span>
</div>
<p className="text-xs text-indigo-500 mt-1 font-jakarta" style={{}}>Wooden Sets</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-2xl border overflow-hidden mb-4 bg-black border-indigo-900">
<img alt="Toy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&amp;w=2953&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 left-3 right-3 w-[calc(100%-1.5rem)] backdrop-blur text-xs font-medium py-2.5 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 bg-indigo-100/90 text-black font-jakarta" onclick="toggleCart()" style={{}}>
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-indigo-100 font-jakarta" style={{}}>Robot Constructor</h3>
<span className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>$62.00</span>
</div>
<p className="text-xs text-indigo-500 mt-1 font-jakarta" style={{}}>STEM &amp; Logic</p>
</div>
</div>
</div>

<div className="mt-16 border-t pt-8 flex items-center justify-between border-indigo-800">
<button className="text-sm text-indigo-500 flex items-center gap-2 font-medium hover:text-indigo-100 font-jakarta" style={{}}>
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="16"></iconify-icon> Previous
                    </button>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium bg-indigo-100 text-black font-jakarta" style={{}}>1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-indigo-500 text-xs font-medium transition-colors hover:bg-indigo-900 font-jakarta" style={{}}>2</button>
</div>
<button className="text-sm text-indigo-500 flex items-center gap-2 font-medium hover:text-indigo-100 font-jakarta" style={{}}>
                        Next <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<footer className="border-t pt-20 pb-10 bg-black border-indigo-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b pb-16 border-indigo-900">
<div className="md:col-span-4">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2 mb-6 font-jakarta" href="#" style={{}}>
<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-[9px] text-black font-jakarta" style={{}}>W</div>
                        WONDER.
                    </a>
<p className="text-sm text-indigo-500 mb-8 max-w-sm leading-relaxed font-jakarta" style={{}}>
                        Inspiring the next generation of thinkers, dreamers, and doers through the power of play.
                    </p>
<div className="flex gap-4">
<a className="transition-colors text-indigo-600 hover:text-indigo-100" href="#"><iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="transition-colors text-indigo-600 hover:text-indigo-100" href="#"><iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>
<div className="md:col-span-2">
<h4 className="text-sm font-semibold mb-4 text-indigo-100 font-jakarta" style={{}}>Shop</h4>
<ul className="space-y-3 text-sm text-indigo-500">
<li className=""><a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>All Toys</a></li>
<li><a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>New Arrivals</a></li>
<li><a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>Gift Cards</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-sm font-semibold mb-4 text-indigo-100 font-jakarta" style={{}}>Company</h4>
<ul className="space-y-3 text-sm text-indigo-500">
<li><a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>Our Story</a></li>
<li><a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>Sustainability</a></li>
<li><a className="transition-colors hover:text-indigo-100 font-jakarta" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div className="md:col-span-4">
<h4 className="text-sm font-semibold mb-4 text-indigo-100 font-jakarta" style={{}}>Join the club</h4>
<form className="flex gap-2">
<input className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:border-indigo-400 transition-colors border-indigo-800 bg-indigo-950" placeholder="Enter your email" type="email"/>
<button className="transition-colors text-sm font-medium rounded-lg pt-2 pr-4 pb-2 pl-4 hover:bg-indigo-200 text-black bg-indigo-100 font-jakarta" style={{}}>Subscribe</button>
</form>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-indigo-600">
<p className="font-jakarta" style={{}}>© 2024 Wonder Toys Inc.</p>
<div className="flex gap-6 items-center">
<a className="hover:text-indigo-400 font-jakarta" href="#" style={{}}>Privacy Policy</a>
<button className="flex items-center gap-1 font-medium transition-colors hover:text-blue-400 font-jakarta" onclick="toggleAdmin()" style={{}}>
<iconify-icon icon="lucide:lock" width="10"></iconify-icon> Admin Access
                    </button>
</div>
</div>
</div>
</footer>

<div className="drawer-overlay fixed inset-0 z-50 backdrop-blur-sm bg-indigo-100/20" id="cart-drawer">
<div className="drawer-content absolute top-0 right-0 h-full w-full max-w-md shadow-2xl flex flex-col bg-black">

<div className="p-6 border-b flex items-center justify-between z-10 border-indigo-900 bg-black">
<h2 className="text-lg font-semibold text-indigo-100 font-jakarta" style={{}}>Checkout</h2>
<button className="transition-colors text-indigo-600 hover:text-indigo-100" onclick="toggleCart()">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border bg-indigo-900 border-indigo-900">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>Nordic Wooden Stacker</h3>
<p className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>$45.00</p>
</div>
<p className="text-xs text-indigo-500 mt-1 font-jakarta" style={{}}>Qty: 1</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border bg-indigo-900 border-indigo-900">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>Classic Aero Plane</h3>
<p className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>$24.00</p>
</div>
<p className="text-xs text-indigo-500 mt-1 font-jakarta" style={{}}>Qty: 1</p>
</div>
</div>
</div>
<div className="h-px my-6 bg-indigo-900"></div>

<div>
<h3 className="text-sm font-medium mb-4 text-indigo-100 font-jakarta" style={{}}>Payment Details</h3>
<div className="space-y-4">

<div>
<label className="block text-xs font-medium text-indigo-500 mb-1.5 font-jakarta" style={{}}>Email address</label>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 placeholder:text-indigo-300 bg-black border-indigo-800 text-indigo-100" type="email" value="customer@example.com"/>
</div>

<div>
<label className="block text-xs font-medium text-indigo-500 mb-1.5 font-jakarta" style={{}}>Card information</label>
<div className="input-group border rounded-lg overflow-hidden bg-black border-indigo-800">
<div className="relative border-b border-indigo-800">
<input className="w-full pl-10 pr-3 py-2.5 text-sm placeholder:text-indigo-300 bg-transparent border-none focus:ring-0" placeholder="Card number" type="text"/>
<div className="absolute left-3 top-2.5 pointer-events-none text-indigo-600">
<iconify-icon icon="lucide:credit-card" width="16"></iconify-icon>
</div>
<div className="absolute right-3 top-2.5 pointer-events-none flex gap-1 text-indigo-600">
<iconify-icon icon="logos:mastercard" width="20"></iconify-icon>
<iconify-icon icon="logos:visa" width="20"></iconify-icon>
</div>
</div>
<div className="flex divide-x divide-indigo-800">
<input className="w-1/2 px-3 py-2.5 text-sm placeholder:text-indigo-300 bg-transparent border-none focus:ring-0" placeholder="MM / YY" type="text"/>
<input className="w-1/2 px-3 py-2.5 text-sm placeholder:text-indigo-300 bg-transparent border-none focus:ring-0" placeholder="CVC" type="text"/>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-indigo-500 mb-1.5 font-jakarta" style={{}}>Name on card</label>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 placeholder:text-indigo-300 bg-black border-indigo-800 text-indigo-100" placeholder="Full name" type="text"/>
</div>
</div>
</div>
</div>

<div className="p-6 border-t border-indigo-900 bg-indigo-950">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-indigo-500 font-jakarta" style={{}}>Subtotal</span>
<span className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>$69.00</span>
</div>
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-indigo-500 font-jakarta" style={{}}>Shipping</span>
<span className="text-sm font-medium text-indigo-100 font-jakarta" style={{}}>Free</span>
</div>
<div className="flex justify-between items-center mb-6 pt-4 border-t border-indigo-800/50">
<span className="text-base font-semibold text-indigo-100 font-jakarta" style={{}}>Total</span>
<span className="text-lg font-semibold text-indigo-100 font-jakarta" style={{}}>$69.00</span>
</div>
<button className="w-full py-3.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 group shadow-lg bg-indigo-100 text-black hover:bg-indigo-200 shadow-indigo-100/10 font-jakarta" style={{}}>
<iconify-icon className="text-indigo-600" icon="lucide:lock" width="14"></iconify-icon>
                    Pay $69.00
                </button>
</div>
</div>
</div>

<div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-indigo-100/40" id="admin-modal">
<div className="modal-content w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col bg-black">

<div className="h-14 border-b flex items-center justify-between px-6 border-indigo-900 bg-indigo-950/50">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-[10px] font-bold text-black font-jakarta" style={{}}>W</div>
<span className="text-sm font-semibold text-indigo-100 font-jakarta" style={{}}>Wonder. Backend</span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium border bg-cyan-900 text-cyan-300 border-cyan-800 font-jakarta" style={{}}>Live</span>
</div>
<button className="text-indigo-600 hover:text-indigo-100" onclick="toggleAdmin()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 bg-[#FAFAFA]">
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-xl border shadow-sm bg-black border-indigo-800">
<p className="text-xs text-indigo-500 mb-1 font-jakarta" style={{}}>Total Revenue</p>
<p className="text-2xl tracking-tight text-indigo-100 font-bricolage font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>$12,450</p>
<div className="flex items-center gap-1 mt-2 text-xs font-medium text-cyan-400 font-jakarta" style={{}}>
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon> +12.5%
                        </div>
</div>
<div className="p-4 rounded-xl border shadow-sm bg-black border-indigo-800">
<p className="text-xs text-indigo-500 mb-1 font-jakarta" style={{}}>Active Orders</p>
<p className="text-2xl tracking-tight text-indigo-100 font-bricolage font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>24</p>
<div className="flex items-center gap-1 mt-2 text-xs font-medium text-indigo-600 font-jakarta" style={{}}>
<iconify-icon icon="lucide:clock" width="12"></iconify-icon> Pending fulfillment
                        </div>
</div>
<div className="p-4 rounded-xl border shadow-sm bg-black border-indigo-800">
<p className="text-xs text-indigo-500 mb-1 font-jakarta" style={{}}>Products</p>
<p className="text-2xl tracking-tight text-indigo-100 font-bricolage font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>84</p>
<div className="flex items-center gap-1 mt-2 text-xs font-medium text-blue-400 font-jakarta" style={{}}>
<iconify-icon icon="lucide:alert-circle" width="12"></iconify-icon> 2 Low stock
                        </div>
</div>
</div>
<h3 className="text-sm font-medium mb-4 text-indigo-100 font-jakarta" style={{}}>Recent Transactions</h3>
<div className="rounded-xl border shadow-sm overflow-hidden bg-black border-indigo-800">
<table className="w-full text-sm text-left">
<thead className="border-b text-xs text-indigo-500 uppercase tracking-wider bg-indigo-950 border-indigo-900">
<tr>
<th className="px-6 py-3 font-medium font-jakarta" style={{}}>Order ID</th>
<th className="px-6 py-3 font-medium font-jakarta" style={{}}>Customer</th>
<th className="px-6 py-3 font-medium font-jakarta" style={{}}>Status</th>
<th className="px-6 py-3 font-medium text-right font-jakarta" style={{}}>Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-indigo-900">
<tr>
<td className="px-6 py-4 font-medium text-indigo-100 font-jakarta" style={{}}>#ORD-0092</td>
<td className="px-6 py-4 text-indigo-500 font-jakarta" style={{}}>alex@example.com</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-cyan-900 text-cyan-200 font-jakarta" style={{}}>Paid</span></td>
<td className="px-6 py-4 text-right font-medium text-indigo-100 font-jakarta" style={{}}>$69.00</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-indigo-100 font-jakarta" style={{}}>#ORD-0091</td>
<td className="px-6 py-4 text-indigo-500 font-jakarta" style={{}}>sarah.j@test.co</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-900 text-yellow-200 font-jakarta" style={{}}>Processing</span></td>
<td className="px-6 py-4 text-right font-medium text-indigo-100 font-jakarta" style={{}}>$124.50</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-indigo-100 font-jakarta" style={{}}>#ORD-0090</td>
<td className="px-6 py-4 text-indigo-500 font-jakarta" style={{}}>mike@studio.io</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-cyan-900 text-cyan-200 font-jakarta" style={{}}>Paid</span></td>
<td className="px-6 py-4 text-right font-medium text-indigo-100 font-jakarta" style={{}}>$45.00</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="p-4 border-t flex justify-end gap-3 border-indigo-900 bg-black">
<button className="px-4 py-2 text-xs font-medium text-indigo-500 hover:text-indigo-100 font-jakarta" onclick="toggleAdmin()" style={{}}>Close</button>
<button className="px-4 py-2 rounded-lg text-xs font-medium bg-indigo-100 text-black hover:bg-indigo-200 font-jakarta" style={{}}>Export Data</button>
</div>
</div>
</div>


    </>
  );
}
