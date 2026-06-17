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



        const publicView = document.getElementById('public-view');
        const loginOverlay = document.getElementById('login-overlay');
        const adminView = document.getElementById('admin-view');

        function toggleLoginModal() {
            if (loginOverlay.classList.contains('hidden-section')) {
                loginOverlay.classList.remove('hidden-section');
            } else {
                loginOverlay.classList.add('hidden-section');
            }
        }

        function enterAdminPanel() {
            // "Log in" logic
            loginOverlay.classList.add('hidden-section');
            publicView.classList.add('hidden-section');
            adminView.classList.remove('hidden-section');
            window.scrollTo(0, 0);
        }

        function exitAdminPanel() {
            // "Log out" logic
            adminView.classList.add('hidden-section');
            publicView.classList.remove('hidden-section');
            window.scrollTo(0, 0);
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
      

<div className="relative w-full transition-opacity duration-500" id="public-view">

<nav className="fixed top-0 w-full z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<button className="md:hidden text-white hover:text-amber-500 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<a className="hover:text-amber-200 transition-colors duration-300 z-10 text-2xl text-white tracking-widest font-serif" href="#">AWAMI CLOTH</a>
<div className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#shop">Fabrics</a>
<a className="hover:text-white transition-colors" href="#new">Couture</a>
<a className="hover:text-white transition-colors" href="#about">Maison</a>

<button className="text-amber-600 hover:text-amber-400 transition-colors flex items-center gap-2 border border-amber-900/30 bg-amber-900/10 px-3 py-1.5 rounded-sm" onclick="toggleLoginModal()">
<iconify-icon icon="solar:lock-keyhole-linear" width="14"></iconify-icon>
                        Admin
                    </button>
</div>
<div className="flex items-center space-x-6 text-neutral-400">
<button className="hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="hover:text-white transition-colors relative group" onclick="document.getElementById('cart-drawer').classList.remove('translate-x-full')">
<iconify-icon height="20" icon="solar:bag-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 z-0">
<img alt="Luxury Fabric" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2s]" src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&amp;w=2168&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10 fade-in-up">
<p className="uppercase text-xs text-amber-500 tracking-[0.4em] mb-6 font-medium">Est. 1985 • Fine Tailoring</p>
<h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 tracking-tight leading-[0.85]">
                    Sartorial <span className="italic font-light text-neutral-500 block md:inline">Elegance</span>
</h1>
<p className="text-neutral-400 text-sm md:text-base font-light max-w-lg mx-auto mb-12 leading-relaxed tracking-wide">
                    Impeccable fabrics sourced from the finest mills. Experience the art of bespoke tailoring and modern design.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="group relative px-10 py-4 overflow-hidden bg-white hover:bg-neutral-200 transition-colors duration-300 cursor-pointer" href="#shop">
<span className="relative text-xs text-black tracking-[0.2em] uppercase font-semibold">Explore Fabrics</span>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0a0a0a] px-6" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-6">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-2">Winter Collection</h2>
<p className="text-neutral-500 text-sm font-light">Pure wool, cashmere, and silk blends.</p>
</div>
<a className="hidden md:flex items-center text-xs tracking-widest text-white hover:text-amber-500 transition-colors mt-4 md:mt-0" href="#">
                        VIEW CATALOG
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-5">
<img alt="Suit Fabric" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="text-[10px] bg-white/90 text-black px-3 py-1 uppercase tracking-widest font-semibold">Bespoke</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
<button className="w-full py-3 bg-white text-black text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all font-medium">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-white tracking-tight mb-1 group-hover:text-amber-500 transition-colors">Charcoal Pinstripe</h3>
<p className="text-neutral-500 text-xs tracking-wide">Super 120s Wool</p>
</div>
<span className="text-sm font-medium text-neutral-300">$180/yd</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-5">
<img alt="Silk Dress" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
<button className="w-full py-3 bg-white text-black text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all font-medium">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-white tracking-tight mb-1 group-hover:text-amber-500 transition-colors">Midnight Silk</h3>
<p className="text-neutral-500 text-xs tracking-wide">Pure Mulberry Silk</p>
</div>
<span className="text-sm font-medium text-neutral-300">$240/yd</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-5">
<img alt="Linen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
<button className="w-full py-3 bg-white text-black text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all font-medium">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-white tracking-tight mb-1 group-hover:text-amber-500 transition-colors">Sandstone Linen</h3>
<p className="text-neutral-500 text-xs tracking-wide">Italian Weave</p>
</div>
<span className="text-sm font-medium text-neutral-300">$95/yd</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-5">
<img alt="Velvet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4">
<span className="text-[10px] bg-amber-600 text-white px-3 py-1 uppercase tracking-widest font-semibold">Sold Out</span>
</div>
</div>
<div className="flex justify-between items-start opacity-60">
<div>
<h3 className="text-lg font-serif text-white tracking-tight mb-1">Royal Velvet</h3>
<p className="text-neutral-500 text-xs tracking-wide">Deep Burgundy</p>
</div>
<span className="text-sm font-medium text-neutral-300">$150/yd</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f0f0f] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-3/5 grid grid-cols-2 gap-2">
<img alt="Suit Main" className="col-span-2 w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<img alt="Fabric Detail" className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<img alt="Stitching" className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&amp;w=1995&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full lg:w-2/5 space-y-8">
<div>
<span className="text-amber-500 text-[10px] tracking-[0.2em] uppercase mb-3 block font-bold">Masterpiece Collection</span>
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-none">The Executive</h2>
<div className="flex items-center space-x-4 mt-6">
<span className="text-2xl text-white font-light">$2,500</span>
<span className="text-[10px] text-neutral-400 border border-neutral-800 px-2 py-1 uppercase tracking-wider">Made to Measure</span>
</div>
</div>
<p className="text-neutral-400 font-light leading-relaxed text-sm">
                            Crafted from Vicuña wool, the rarest and finest fiber in the world. Unstructured shoulders for a modern silhouette, finished with hand-rolled lapels and horn buttons.
                        </p>
<div className="space-y-4">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Select Shade</label>
<div className="flex space-x-3">
<button className="w-8 h-8 rounded-full border border-white bg-[#1a1a1a] focus:ring-1 ring-offset-2 ring-offset-black ring-white transition-all"></button>
<button className="w-8 h-8 rounded-full border border-neutral-700 bg-[#2d3035] focus:ring-1 ring-offset-2 ring-offset-black ring-white transition-all opacity-50 hover:opacity-100"></button>
<button className="w-8 h-8 rounded-full border border-neutral-700 bg-[#3e342f] focus:ring-1 ring-offset-2 ring-offset-black ring-white transition-all opacity-50 hover:opacity-100"></button>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex gap-4">
<button className="flex-1 py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors font-bold">Book Consultation</button>
<button className="px-5 py-4 border border-white/20 text-white hover:border-amber-500 hover:text-amber-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] text-center border-t border-white/5" id="about">
<div className="max-w-3xl mx-auto px-6">
<iconify-icon className="mx-auto text-amber-500 mb-6 text-4xl" icon="solar:crown-star-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-8">The Awami Standard</h2>
<p className="text-neutral-400 font-light text-lg leading-relaxed mb-12">
                    We don't just sell cloth; we provide the canvas for your identity. For over three decades, Awami Cloth House has stood as a beacon of quality, offering an exclusive selection of imported wools, Egyptian cottons, and French silks.
                </p>
<div className="flex justify-center space-x-8">
<div className="text-center">
<span className="block text-2xl font-serif text-white">10k+</span>
<span className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Yards Sold</span>
</div>
<div className="w-px bg-neutral-800 h-12"></div>
<div className="text-center">
<span className="block text-2xl font-serif text-white">100%</span>
<span className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Imported</span>
</div>
<div className="w-px bg-neutral-800 h-12"></div>
<div className="text-center">
<span className="block text-2xl font-serif text-white">35</span>
<span className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Years Heritage</span>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-serif tracking-widest text-white block mb-6" href="#">AWAMI CLOTH</a>
<p className="text-neutral-500 text-sm font-light mb-6">
                            Timeless fabrics for the modern gentleman.
                        </p>
</div>
<div>
<h4 className="text-white text-[10px] uppercase tracking-widest mb-6 font-bold">Collections</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-amber-200 transition-colors" href="#">Suiting</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Shirting</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-[10px] uppercase tracking-widest mb-6 font-bold">Client Service</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-amber-200 transition-colors" href="#">Book Tailor</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Shipping Info</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-[10px] uppercase tracking-widest mb-6 font-bold">Newsletter</h4>
<form className="flex flex-col space-y-4">
<input className="bg-[#111] border border-neutral-800 text-sm p-3 text-white focus:outline-none focus:border-amber-600 placeholder-neutral-700" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black text-xs uppercase tracking-widest py-3 hover:bg-neutral-200 transition-colors font-bold">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-600 font-medium">
<p>© 2024 Awami Cloth House. All rights reserved.</p>
</div>
</div>
</footer>
</div>

<div className="hidden-section fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6" id="login-overlay">
<div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 p-8 md:p-12 relative shadow-2xl">
<button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors" onclick="toggleLoginModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="text-center mb-10">
<iconify-icon className="text-amber-600 text-4xl mb-4" icon="solar:shield-keyhole-linear"></iconify-icon>
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Restricted Access</h2>
<p className="text-neutral-500 text-sm font-light">Please authenticate to access inventory controls.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); enterAdminPanel();">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Access ID</label>
<input className="w-full bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-amber-600 transition-colors placeholder-neutral-700" placeholder="admin@awamicloth.com" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Passkey</label>
<input className="w-full bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-amber-600 transition-colors placeholder-neutral-700" placeholder="••••••••" type="password"/>
</div>
<button className="w-full py-4 bg-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-amber-500 transition-all mt-4" type="submit">
                    Enter Dashboard
                </button>
</form>
<p className="mt-8 text-center text-[10px] text-neutral-600 uppercase tracking-widest">Authorized Personnel Only</p>
</div>
</div>

<div className="hidden-section min-h-screen bg-neutral-900 pb-20" id="admin-view">

<nav className="bg-black border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-white font-serif tracking-widest text-xl">AWAMI <span className="text-amber-600">ADMIN</span></span>
<span className="text-[10px] text-neutral-500 border border-neutral-800 px-2 py-1 uppercase tracking-wider rounded-sm">V2.0.1</span>
</div>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white flex items-center gap-2" onclick="exitAdminPanel()">
<iconify-icon icon="solar:logout-2-linear" width="16"></iconify-icon>
                    Back to Website
                </button>
</div>
</nav>
<div className="max-w-7xl mx-auto px-6 pt-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-10">
<div>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">Product Dashboard</h2>
<p className="text-neutral-400 mt-2 text-sm">Manage inventory, prices, and fabric imports.</p>
</div>
<div className="flex gap-4">
<button className="bg-amber-600/20 text-amber-500 border border-amber-600/50 px-4 py-3 text-xs uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all flex items-center gap-2">
<iconify-icon icon="solar:file-download-linear"></iconify-icon> Export Data
                    </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 bg-black border border-white/10 p-8 h-fit sticky top-6">
<h3 className="text-white text-lg font-serif mb-6 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:import-linear"></iconify-icon>
                        Import Product
                    </h3>
<form className="space-y-5">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Product Name</label>
<input className="w-full bg-[#111] border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-amber-600 transition-colors placeholder-neutral-700" placeholder="e.g. Italian Silk Scarf" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Price ($)</label>
<input className="w-full bg-[#111] border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-amber-600 transition-colors" placeholder="0.00" type="number"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Stock</label>
<input className="w-full bg-[#111] border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-amber-600 transition-colors" placeholder="Qty" type="number"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Category</label>
<div className="relative">
<select className="w-full bg-[#111] border border-neutral-800 p-3 text-sm text-neutral-400 focus:outline-none focus:border-amber-600 appearance-none">
<option>Select Category</option>
<option>Fabrics</option>
<option>Ready to Wear</option>
<option>Accessories</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Image Upload</label>
<div className="w-full border border-dashed border-neutral-700 bg-[#111] p-6 text-center hover:border-amber-600 transition-colors cursor-pointer group">
<iconify-icon className="text-neutral-500 group-hover:text-white text-2xl mb-2 transition-colors" icon="solar:cloud-upload-linear"></iconify-icon>
<p className="text-[10px] text-neutral-500 uppercase tracking-wide">Drop file or click</p>
</div>
</div>
<button className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-amber-500 transition-all mt-2" type="button">
                            Add to Inventory
                        </button>
</form>
</div>

<div className="lg:col-span-8 bg-black border border-white/10 p-8 overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h3 className="text-white text-lg font-serif">Recent Imports</h3>
<div className="flex gap-2">
<input className="bg-[#111] border border-neutral-800 py-2 px-3 text-xs text-white focus:outline-none w-48" placeholder="Search SKU..." type="text"/>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left dashboard-table">
<thead>
<tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-neutral-500">
<th className="pb-4 font-bold">Product</th>
<th className="pb-4 font-bold">Category</th>
<th className="pb-4 font-bold">Stock</th>
<th className="pb-4 font-bold">Price</th>
<th className="pb-4 font-bold">Status</th>
<th className="pb-4 font-bold text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-300">
<tr className="border-b border-white/5 transition-colors">
<td className="py-4 flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-800 rounded-sm overflow-hidden"><img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/></div>
<span className="font-medium text-white">Charcoal Pinstripe</span>
</td>
<td className="py-4 text-xs">Fabrics</td>
<td className="py-4 text-xs">450 yds</td>
<td className="py-4 text-xs">$180.00</td>
<td className="py-4"><span className="bg-green-900/30 text-green-400 border border-green-900 px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full">Active</span></td>
<td className="py-4 text-right">
<button className="text-neutral-500 hover:text-white"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
</td>
</tr>
<tr className="border-b border-white/5 transition-colors">
<td className="py-4 flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-800 rounded-sm overflow-hidden"><img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/></div>
<span className="font-medium text-white">Midnight Silk</span>
</td>
<td className="py-4 text-xs">Fabrics</td>
<td className="py-4 text-xs">120 yds</td>
<td className="py-4 text-xs">$240.00</td>
<td className="py-4"><span className="bg-green-900/30 text-green-400 border border-green-900 px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full">Active</span></td>
<td className="py-4 text-right">
<button className="text-neutral-500 hover:text-white"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
</td>
</tr>
<tr className="border-b border-transparent transition-colors">
<td className="py-4 flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-800 rounded-sm overflow-hidden"><img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/></div>
<span className="font-medium text-white">Sandstone Linen</span>
</td>
<td className="py-4 text-xs">Fabrics</td>
<td className="py-4 text-xs">300 yds</td>
<td className="py-4 text-xs">$95.00</td>
<td className="py-4"><span className="bg-green-900/30 text-green-400 border border-green-900 px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full">Active</span></td>
<td className="py-4 text-right">
<button className="text-neutral-500 hover:text-white"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#0a0a0a] z-[60] transform translate-x-full transition-transform duration-500 ease-in-out border-l border-white/10 shadow-2xl flex flex-col" id="cart-drawer">
<div className="flex items-center justify-between p-6 border-b border-white/5">
<h2 className="text-lg font-serif text-white tracking-tight">Shopping Bag</h2>
<button className="text-neutral-400 hover:text-white transition-colors" onclick="document.getElementById('cart-drawer').classList.add('translate-x-full')">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div className="flex gap-4">
<div className="w-20 h-24 bg-neutral-800 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-white font-medium">Charcoal Pinstripe</h3>
<span className="text-sm text-white">$540</span>
</div>
<p className="text-xs text-neutral-500 mb-3">3 Yards</p>
<div className="flex items-center space-x-4">
<div className="flex items-center border border-neutral-800">
<button className="px-2 text-neutral-400 hover:text-white">-</button>
<span className="text-xs text-white px-2">1</span>
<button className="px-2 text-neutral-400 hover:text-white">+</button>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 bg-black p-6">
<div className="flex justify-between items-center mb-6">
<span className="text-xs text-neutral-400 uppercase tracking-widest font-bold">Subtotal</span>
<span className="text-lg font-serif text-white">$540.00</span>
</div>
<button className="w-full py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors font-bold mb-3">
                Checkout
            </button>
</div>
</div>



    </>
  );
}
