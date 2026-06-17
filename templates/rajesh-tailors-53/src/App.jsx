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
      

<header className="bg-white shadow-sm border-b border-amber-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center py-4">
<div className="flex items-center">
<div className="bg-amber-600 text-white px-3 py-2 rounded-lg font-semibold tracking-tight text-lg">RT</div>
<div className="ml-3">
<h1 className="font-playfair font-semibold text-xl text-amber-900">Rajesh Tailors</h1>
<p className="text-xs text-amber-700">Master Craftsman Since 1987</p>
</div>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-amber-700 hover:text-amber-900 font-medium transition-colors" href="#services">Services</a>
<a className="text-amber-700 hover:text-amber-900 font-medium transition-colors" href="#products">Products</a>
<a className="text-amber-700 hover:text-amber-900 font-medium transition-colors" href="#testimonials">Testimonials</a>
<a className="text-amber-700 hover:text-amber-900 font-medium transition-colors" href="#contact">Contact</a>
</nav>
<button className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                    Book Consultation
                </button>
</div>
</div>
</header>

<section className="relative bg-gradient-to-br from-amber-100 to-orange-100 py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-amber-900 leading-tight tracking-tight mb-6">
                        Crafting Timeless <br/><span className="text-amber-600">Ethnic Elegance</span>
</h2>
<p className="text-lg text-amber-800 mb-8 leading-relaxed">
                        With over 35 years of expertise, we bring your traditional wear dreams to life. From intricate sherwanis to elegant lehengas, each piece is crafted with passion and precision.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center">
<svg className="lucide lucide-scissors w-5 h-5 mr-2" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
                            Start Custom Order
                        </button>
<button className="border border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center">
<svg className="lucide lucide-phone w-5 h-5 mr-2" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            Call Now
                        </button>
</div>
</div>
<div className="relative">
<img alt="Traditional Indian Clothing" className="lg:h-[500px] w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6cca01ab-29a6-4edd-bb9f-0c928de9c78d_1600w.jpg"/>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
<div className="flex items-center space-x-3">
<div className="bg-green-100 p-2 rounded-lg">
<svg className="lucide lucide-award w-6 h-6 text-green-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<p className="font-semibold text-amber-900">5000+ Happy Customers</p>
<p className="text-sm text-amber-700">Trusted Since 1987</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h3 className="font-playfair text-3xl lg:text-4xl font-semibold text-amber-900 tracking-tight mb-4">Our Specializations</h3>
<p className="text-lg text-amber-700 max-w-2xl mx-auto">From wedding attire to festive wear, we create masterpieces that celebrate tradition</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="group bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
<svg className="lucide lucide-crown w-6 h-6 text-amber-600" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h4 className="font-semibold text-lg text-amber-900 mb-2">Wedding Sherwanis</h4>
<p className="text-amber-700 text-sm">Luxurious sherwanis with intricate embroidery and premium fabrics for your special day</p>
</div>
<div className="group bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
<svg className="lucide lucide-sparkles w-6 h-6 text-amber-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h4 className="font-semibold text-lg text-amber-900 mb-2">Designer Lehengas</h4>
<p className="text-amber-700 text-sm">Elegant lehengas with traditional motifs and contemporary cuts for modern brides</p>
</div>
<div className="group bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
<svg className="lucide lucide-shirt w-6 h-6 text-amber-600" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
</div>
<h4 className="font-semibold text-lg text-amber-900 mb-2">Kurta Pajamas</h4>
<p className="text-amber-700 text-sm">Comfortable daily wear and festive kurtas in cotton, silk, and linen fabrics</p>
</div>
<div className="group bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
<svg className="lucide lucide-gem w-6 h-6 text-amber-600" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h4 className="font-semibold text-lg text-amber-900 mb-2">Saree Blouses</h4>
<p className="text-amber-700 text-sm">Perfect-fit blouses with custom designs to complement your precious sarees</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h3 className="font-playfair text-3xl lg:text-4xl font-semibold text-amber-900 tracking-tight mb-4">Featured Creations</h3>
<p className="text-lg text-amber-700 max-w-2xl mx-auto">Handpicked masterpieces that showcase our craftsmanship and attention to detail</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
<div className="relative">
<img alt="Royal Sherwani" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&amp;h=300&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">Bestseller</div>
</div>
<div className="p-6">
<h4 className="font-playfair text-xl font-semibold text-amber-900 mb-2">Royal Wedding Sherwani</h4>
<p className="text-amber-700 mb-4">Luxurious silk sherwani with golden thread embroidery and matching dupatta</p>
<div className="flex justify-between items-center">
<span className="text-2xl font-semibold text-amber-600">₹18,500</span>
<button className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                                Order Now
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
<div className="relative">
<img alt="Designer Lehenga" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&amp;h=300&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">New Arrival</div>
</div>
<div className="p-6">
<h4 className="font-playfair text-xl font-semibold text-amber-900 mb-2">Bridal Lehenga Set</h4>
<p className="text-amber-700 mb-4">Stunning red lehenga with mirror work and intricate beadwork detailing</p>
<div className="flex justify-between items-center">
<span className="text-2xl font-semibold text-amber-600">₹24,000</span>
<button className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                                Order Now
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
<div className="relative">
<img alt="Silk Kurta" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Popular</div>
</div>
<div className="p-6">
<h4 className="font-playfair text-xl font-semibold text-amber-900 mb-2">Premium Silk Kurta</h4>
<p className="text-amber-700 mb-4">Pure silk kurta with traditional block prints, perfect for festivals</p>
<div className="flex justify-between items-center">
<span className="text-2xl font-semibold text-amber-600">₹4,500</span>
<button className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                                Order Now
                            </button>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<button className="border border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-medium hover:bg-amber-600 hover:text-white transition-colors">
                    View All Products
                </button>
</div>
</div>
</section>

<section className="py-20 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h3 className="font-playfair text-3xl lg:text-4xl font-semibold text-amber-900 tracking-tight mb-4">What Our Customers Say</h3>
<p className="text-lg text-amber-700 max-w-2xl mx-auto">Trusted by families across generations for our quality and craftsmanship</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
<div className="flex items-center mb-4">
<img alt="Amit Sharma" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="font-semibold text-amber-900">Amit Sharma</h4>
<div className="flex text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<p className="text-amber-800 italic">"Rajesh ji made the most beautiful sherwani for my wedding. The fit was perfect and the embroidery work was absolutely stunning. Every guest complimented the outfit!"</p>
</div>
<div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
<div className="flex items-center mb-4">
<img alt="Priya Agarwal" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<h4 className="font-semibold text-amber-900">Priya Agarwal</h4>
<div className="flex text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<p className="text-amber-800 italic">"I've been getting my blouses stitched here for 10 years. The attention to detail and perfect fitting keeps me coming back. Highly recommended!"</p>
</div>
<div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
<div className="flex items-center mb-4">
<img alt="Vikram Singh" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<h4 className="font-semibold text-amber-900">Vikram Singh</h4>
<div className="flex text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<p className="text-amber-800 italic">"Outstanding craftsmanship! My entire family gets our ethnic wear from Rajesh Tailors. The quality of fabrics and stitching is unmatched."</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h3 className="font-playfair text-3xl lg:text-4xl font-semibold text-amber-900 tracking-tight mb-4">Our Design Process</h3>
<p className="text-lg text-amber-700 max-w-2xl mx-auto">From consultation to delivery, we ensure perfection at every step</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
<svg className="lucide lucide-users w-8 h-8 text-amber-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h4 className="font-semibold text-lg text-amber-900 mb-2">1. Consultation</h4>
<p className="text-amber-800 text-sm">Understand your vision, occasion, and style preferences</p>
</div>
<div className="text-center">
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
<svg className="lucide lucide-ruler w-8 h-8 text-amber-600" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
</div>
<h4 className="font-semibold text-lg text-amber-900 mb-2">2. Measurements</h4>
<p className="text-amber-800 text-sm">Precise measurements for the perfect fit</p>
</div>
<div className="text-center">
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
<svg className="lucide lucide-scissors w-8 h-8 text-amber-600" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h4 className="font-semibold text-lg text-amber-900 mb-2">3. Crafting</h4>
<p className="text-amber-800 text-sm">Skilled artisans bring your design to life</p>
</div>
<div className="text-center">
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
<svg className="lucide lucide-gift w-8 h-8 text-amber-600" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<h4 className="font-semibold text-lg text-amber-900 mb-2">4. Delivery</h4>
<p className="text-amber-800 text-sm">Perfect outfit ready for your special occasion</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h3 className="font-playfair text-3xl lg:text-4xl font-semibold text-amber-900 tracking-tight mb-6">Visit Our Store</h3>
<p className="text-lg text-amber-700 mb-8">Experience our craftsmanship firsthand. Visit our store for consultations and fittings.</p>
<div className="space-y-4">
<div className="flex items-center">
<svg className="lucide lucide-map-pin w-6 h-6 text-amber-600 mr-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<p className="font-medium text-amber-900">123 Fashion Street, Textile Market</p>
<p className="text-amber-700">Mumbai, Maharashtra 400001</p>
</div>
</div>
<div className="flex items-center">
<svg className="lucide lucide-phone w-6 h-6 text-amber-600 mr-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div>
<p className="font-medium text-amber-900">+91 98765 43210</p>
<p className="text-amber-700">Call for appointments</p>
</div>
</div>
<div className="flex items-center">
<svg className="lucide lucide-clock w-6 h-6 text-amber-600 mr-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<p className="font-medium text-amber-900">Mon - Sat: 10 AM - 8 PM</p>
<p className="text-amber-700">Sunday: 11 AM - 6 PM</p>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
<h4 className="font-playfair text-2xl font-semibold text-amber-900 mb-6">Get A Quote</h4>
<form className="space-y-4">
<div>
<input className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent" placeholder="Full Name" type="text"/>
</div>
<div>
<input className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent" placeholder="Phone Number" type="tel"/>
</div>
<div>
<select className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent">
<option>Select Service</option>
<option>Wedding Sherwani</option>
<option>Designer Lehenga</option>
<option>Kurta Pajama</option>
<option>Saree Blouse</option>
<option>Other</option>
</select>
</div>
<div>
<textarea className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent" placeholder="Tell us about your requirements" rows="4"></textarea>
</div>
<button className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors" type="submit">
                            Send Quote Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-amber-900 text-amber-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<div className="flex items-center mb-4">
<div className="bg-amber-600 text-white px-3 py-2 rounded-lg font-semibold tracking-tight text-lg">RT</div>
<div className="ml-3">
<h4 className="font-playfair font-semibold text-xl">Rajesh Tailors</h4>
</div>
</div>
<p className="text-amber-200 mb-4">Crafting traditional ethnic wear with passion and precision since 1987. Your trusted partner for all occasions.</p>
<div className="flex space-x-4">
<div className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
<div className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
</div>
</div>
<div>
<h5 className="font-semibold text-lg mb-4">Services</h5>
<ul className="space-y-2 text-amber-200">
<li><a className="hover:text-white transition-colors" href="#">Wedding Wear</a></li>
<li><a className="hover:text-white transition-colors" href="#">Festive Outfits</a></li>
<li><a className="hover:text-white transition-colors" href="#">Daily Wear</a></li>
<li><a className="hover:text-white transition-colors" href="#">Custom Designs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Alterations</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-lg mb-4">Contact Info</h5>
<ul className="space-y-2 text-amber-200">
<li>123 Fashion Street, Mumbai</li>
<li>+91 98765 43210</li>
<li>info@rajeshtailors.com</li>
<li>Mon-Sat: 10 AM - 8 PM</li>
</ul>
</div>
</div>
<div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
<p>© 2024 Rajesh Tailors. All rights reserved. | Crafted with care for tradition.</p>
</div>
</div>
</footer>


    </>
  );
}
