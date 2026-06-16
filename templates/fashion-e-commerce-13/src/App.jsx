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
brand: {
black: '#0a0a0a',
dark: '#171717',
gray: '#737373',
light: '#f5f5f5',
white: '#ffffff',
accent: '#C6A87C'
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-brand-black text-white text-xs py-2 text-center tracking-wide font-medium">
        FREE DELIVERY WITHIN ACCRA ON ORDERS OVER GHS 500
    </div>

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<button className="md:hidden p-2 text-brand-dark hover:bg-gray-50 rounded-md">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="flex-shrink-0 flex items-center">
<a className="text-2xl md:text-3xl font-serif font-semibold tracking-tighter uppercase" href="#">
                        Preymann
                    </a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-brand-dark hover:text-brand-gray transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-brand-dark hover:text-brand-gray transition-colors" href="#shop">Shop</a>
<a className="text-sm font-medium text-brand-dark hover:text-brand-gray transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-brand-dark hover:text-brand-gray transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-brand-dark hover:text-brand-gray transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center space-x-4">
<button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="p-2 hover:bg-gray-50 rounded-full transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-1 right-0 bg-brand-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-gray-100" id="home">

<div className="absolute inset-0 z-0">
<img alt="Fashion Model Street Style" className="w-full h-full object-cover object-center brightness-[0.85]" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
<p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-4 text-gray-200">New Collection 2024</p>
<h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 leading-[1.1]">
                Stylish, Trendy Clothing <br/> in Accra
            </h1>
<p className="text-base md:text-lg font-light text-gray-200 mb-10 max-w-xl mx-auto">
                Discover the finest selection of local and international fashion curated for the modern lifestyle.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-sm font-medium rounded-none text-brand-black bg-white hover:bg-gray-100 transition-all duration-300 min-w-[160px]" href="#shop">
                    Shop Now
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-white text-sm font-medium rounded-none text-white hover:bg-white hover:text-brand-black transition-all duration-300 min-w-[160px]" href="#locations">
                    Visit Our Store
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] bg-gray-200 overflow-hidden">

<img alt="Preymann Store Interior Vibe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 w-48 h-48 border border-brand-black/10 hidden md:block"></div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6">Redefining Fashion in Ghana</h2>
<p className="text-gray-600 font-light leading-relaxed mb-6">
                        Established in the heart of Accra, Preymann Clothing is more than just a store; it's a destination for style enthusiasts. Located at <span className="text-brand-black font-medium">101 Lindy Road E. Legon</span>, we bridge the gap between global trends and local flair.
                    </p>
<p className="text-gray-600 font-light leading-relaxed mb-8">
                        Our mission is simple: to provide high-quality, authentic fashion for men and women who want to stand out. From casual streetwear to elegant evening attire, every piece is selected with our customers' confidence in mind.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
<div>
<div className="text-3xl font-serif font-medium mb-1">3+</div>
<div className="text-sm text-gray-500 uppercase tracking-wider">Locations</div>
</div>
<div>
<div className="text-3xl font-serif font-medium mb-1">100%</div>
<div className="text-sm text-gray-500 uppercase tracking-wider">Quality Authentic</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-serif font-medium tracking-tight mb-8">Shop by Category</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<a className="group relative h-[400px] overflow-hidden" href="#shop">
<img alt="Men's Wear" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-serif font-medium">Men's Wear</h3>
<span className="inline-flex items-center gap-2 mt-2 text-sm border-b border-white pb-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
<a className="group relative h-[400px] overflow-hidden" href="#shop">
<img alt="Women's Wear" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-serif font-medium">Women's Wear</h3>
<span className="inline-flex items-center gap-2 mt-2 text-sm border-b border-white pb-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
<a className="group relative h-[400px] overflow-hidden" href="#shop">
<img alt="Accessories" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-serif font-medium">Accessories</h3>
<span className="inline-flex items-center gap-2 mt-2 text-sm border-b border-white pb-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="shop">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-serif font-medium tracking-tight mb-2">Featured Collection</h2>
<p className="text-gray-500 font-light">Handpicked styles arriving in Accra this week.</p>
</div>

<div className="flex items-center gap-4 mt-4 md:mt-0">
<button className="flex items-center gap-2 text-sm font-medium text-brand-black border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon> Filter
                    </button>
<button className="flex items-center gap-2 text-sm font-medium text-brand-black border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
                        Sort by <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-black hover:text-white">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="text-base font-medium text-brand-dark">Urban Linen Shirt</h3>
<p className="text-sm text-gray-500">Men's Casual</p>
<p className="text-sm font-semibold text-brand-black mt-2">GHS 350.00</p>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-black hover:text-white">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="text-base font-medium text-brand-dark">Silk Oversized Blouse</h3>
<p className="text-sm text-gray-500">Women's Tops</p>
<p className="text-sm font-semibold text-brand-black mt-2">GHS 280.00</p>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-black hover:text-white">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="text-base font-medium text-brand-dark">Tailored Chinos</h3>
<p className="text-sm text-gray-500">Men's Bottoms</p>
<p className="text-sm font-semibold text-brand-black mt-2">GHS 420.00</p>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">

<img alt="Summer Maxi Dress" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-black hover:text-white">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="text-base font-medium text-brand-dark">Summer Maxi Dress</h3>
<p className="text-sm text-gray-500">Women's Dresses</p>
<p className="text-sm font-semibold text-brand-black mt-2">GHS 550.00</p>
</div>
</div>
</div>
<div className="text-center mt-12">
<button className="px-8 py-3 border border-brand-black text-brand-black text-sm font-medium hover:bg-brand-black hover:text-white transition-all duration-300">
                    View All Products
                </button>
</div>
</div>
</section>

<section className="py-20 bg-brand-black text-white" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-4">Our Locations</h2>
<p className="text-gray-400 font-light">Visit us at any of our branches across Accra</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
<div className="mb-4 text-brand-accent">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">East Legon (Main)</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                        101 Lindy Road<br/>
                        Near A&amp;C Mall<br/>
                        East Legon, Accra
                    </p>
<a className="text-sm flex items-center gap-2 hover:text-brand-accent transition-colors" href="tel:+233502328239">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon> +233 50 232 8239
                    </a>
</div>

<div className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
<div className="mb-4 text-brand-accent">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Haatso Branch</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                        Main Haatso-Atomic Road<br/>
                        Opposite Ecobank<br/>
                        Haatso, Accra
                    </p>
<a className="text-sm flex items-center gap-2 hover:text-brand-accent transition-colors" href="tel:+233502328239">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon> Call Branch
                    </a>
</div>

<div className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
<div className="mb-4 text-brand-accent">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Osu Branch</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                        Oxford Street<br/>
                        Behind Koala Shopping Center<br/>
                        Osu, Accra
                    </p>
<a className="text-sm flex items-center gap-2 hover:text-brand-accent transition-colors" href="tel:+233502328239">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon> Call Branch
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-serif font-medium tracking-tight mb-6">Get in Touch</h2>
<p className="text-gray-600 font-light mb-8">Have a question about a product or need directions? Send us a message.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
<input className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-brand-black transition-colors" placeholder="Kwame" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
<input className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-brand-black transition-colors" placeholder="Mensah" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-brand-black transition-colors" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
<textarea className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-brand-black transition-colors" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="px-8 py-3 bg-brand-black text-white text-sm font-medium hover:bg-gray-800 transition-colors" type="button">
                            Send Message
                        </button>
</form>
</div>

<div className="h-full min-h-[400px] bg-gray-200 relative">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.437435866632!2d-0.1601618!3d5.6496495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c6e03333333%3A0x123456789abcdef!2sEast%20Legon%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh" style={{border: '0', filter: 'grayscale(1)'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 bg-white p-4 shadow-lg max-w-xs">
<p className="font-serif font-medium text-brand-black">Head Office</p>
<p className="text-xs text-gray-500 mt-1">101 Lindy Road, E. Legon</p>
<p className="text-xs text-gray-500">Mon - Sat: 9:00 AM - 8:00 PM</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-serif font-semibold tracking-tighter uppercase block mb-6" href="#">Preymann</a>
<p className="text-gray-500 text-sm font-light leading-relaxed">
                        Leading the fashion scene in Accra with premium clothing and unparalleled style.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-gray-400 hover:text-brand-black transition-colors" href="#"><iconify-icon icon="logos:instagram-icon" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-brand-black transition-colors" href="#"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-brand-black transition-colors" href="#"><iconify-icon icon="logos:whatsapp-icon" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-medium text-brand-black mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-brand-black transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-brand-black transition-colors" href="#">Men's Collection</a></li>
<li><a className="hover:text-brand-black transition-colors" href="#">Women's Collection</a></li>
<li><a className="hover:text-brand-black transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-brand-black mb-6">Company</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-brand-black transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-black transition-colors" href="#locations">Store Locations</a></li>
<li><a className="hover:text-brand-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-black transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-brand-black mb-6">Contact</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>101 Lindy Road,<br/>E. Legon, Accra</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="flex-shrink-0" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>+233 50 232 8239</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="flex-shrink-0" icon="solar:letter-linear" width="16"></iconify-icon>
<span>hello@preymann.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
<p>© 2024 Preymann Clothing Ghana. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-brand-black" href="#">Terms</a>
<a className="hover:text-brand-black" href="#">Privacy</a>
<a className="hover:text-brand-black" href="#">Delivery Info</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center" href="https://wa.me/233502328239">
<iconify-icon height="24" icon="logos:whatsapp-icon" style={{filter: 'brightness(0) invert(1)'}} width="24"></iconify-icon>
</a>

    </>
  );
}
