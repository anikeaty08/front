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
      

<header className="container mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center">
<div className="text-amber-800 font-bold text-2xl">Brew Haven</div>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="font-bold" href="#">Home</a>
<a className="text-gray-600 hover:text-amber-800" href="#">Menu</a>
<a className="text-gray-600 hover:text-amber-800" href="#">About</a>
<a className="text-gray-600 hover:text-amber-800" href="#">Locations</a>
</nav>
<div className="flex items-center space-x-4">
<button className="border border-amber-800 text-amber-800 px-4 py-2 rounded-md hidden md:block">Order Online</button>
<div className="md:hidden">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</header>

<section className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="flex flex-col justify-center">
<h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">Discover The Perfect <span className="text-amber-700">Coffee Experience</span></h1>
<p className="text-gray-600 mb-8">Ethically sourced beans, expertly roasted, and brewed with passion. Every cup tells a story.</p>
<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
<button className="bg-amber-800 text-white px-6 py-3 rounded-md">View Menu</button>
<div className="flex items-center">
<div className="flex -space-x-2">
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/17.jpg"/>
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/59.jpg"/>
</div>
<span className="ml-4 text-sm font-medium">50k+ Happy Customers</span>
</div>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden">
<div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-8 text-white">
<button className="self-start bg-white text-amber-800 px-4 py-2 rounded-md text-sm">Try Our Seasonal Blend</button>
<h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">Taste the difference of freshly roasted beans.</h2>
</div>
<img alt="Coffee" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-64">
<h3 className="font-medium mb-4">Subscribe for Delivery</h3>
<div className="space-y-4">
<input className="w-full px-3 py-2 border rounded-md" placeholder="Your name" type="text"/>
<input className="w-full px-3 py-2 border rounded-md" placeholder="Email address" type="email"/>
<div>
<p className="text-sm mb-2">I'm interested in:</p>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 text-sm border rounded-md">Whole beans</button>
<button className="px-3 py-1 text-sm bg-amber-100 rounded-md">Ground coffee</button>
</div>
</div>
<button className="w-full bg-amber-800 text-white py-2 rounded-md">Subscribe</button>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 py-12">
<h2 className="text-3xl font-bold mb-8 text-center">Our Signature Blends</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="bg-white p-4 rounded-xl shadow-sm">
<img alt="Ethiopian Coffee" className="w-full h-40 object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<h3 className="font-medium">Ethiopian Yirgacheffe</h3>
<p className="text-sm text-gray-500">Bright, floral notes with citrus acidity</p>
<p className="text-amber-800 font-bold mt-2">$18.99</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm">
<img alt="Colombian Coffee" className="w-full h-40 object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<h3 className="font-medium">Colombian Supremo</h3>
<p className="text-sm text-gray-500">Rich caramel sweetness with nutty finish</p>
<p className="text-amber-800 font-bold mt-2">$16.99</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm">
<img alt="Espresso Blend" className="w-full h-40 object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<h3 className="font-medium">Espresso Blend</h3>
<p className="text-sm text-gray-500">Bold chocolate notes with smooth finish</p>
<p className="text-amber-800 font-bold mt-2">$17.99</p>
</div>
</div>
</section>

<section className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="flex flex-col justify-center">
<h2 className="text-3xl font-bold mb-4">From Bean to Cup: Our Coffee Journey</h2>
<p className="text-gray-600 mb-6">We work directly with farmers across the globe to source the finest coffee beans. Our master roasters bring out unique flavor profiles through careful roasting techniques perfected over decades.</p>
<button className="self-start border border-amber-800 text-amber-800 px-4 py-2 rounded-md">Our Story</button>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="col-span-2">
<img alt="Coffee Roasting" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="space-y-4">
<div className="bg-white p-3 rounded-xl shadow-sm h-1/2">
<img alt="Coffee Beans" className="w-full h-28 object-cover rounded-lg mb-2" src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<h3 className="text-sm font-medium">Ethically sourced beans</h3>
</div>
<div className="bg-white p-3 rounded-xl shadow-sm h-1/2">
<img alt="Coffee Farm" className="w-full h-28 object-cover rounded-lg mb-2" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<h3 className="text-sm font-medium">Direct trade relationships</h3>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row gap-12">
<div className="md:w-1/3">
<p className="text-amber-700 mb-2">Brew Guides</p>
<h2 className="text-3xl font-bold mb-4">Perfect Your Home Brewing Technique</h2>
<p className="text-gray-600 mb-6">Whether you're using a French press, pour-over, or espresso machine, our guides will help you brew the perfect cup every time.</p>
<div className="flex items-center gap-4">
<button className="w-10 h-10 border border-amber-800 rounded-full flex items-center justify-center">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</button>
<button className="w-10 h-10 bg-amber-800 text-white rounded-full flex items-center justify-center">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</div>
<div className="md:w-2/3 grid grid-cols-4 gap-4">
<div className="col-span-3 relative rounded-xl overflow-hidden">
<img alt="Pour Over Coffee" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-6 left-6 bg-white py-2 px-4 rounded-md text-sm">
<p className="text-amber-700 font-medium">Brew Guide</p>
<p>The Perfect Pour-Over Method</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-white rounded-xl overflow-hidden h-1/2">
<img alt="French Press" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="bg-white rounded-xl overflow-hidden h-1/2">
<img alt="Espresso" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-amber-900 text-amber-50 mt-12">
<div className="container mx-auto px-6 py-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="font-bold text-2xl mb-4 md:mb-0">Brew Haven</div>
<div className="flex gap-8">
<a className="hover:text-amber-200" href="#">Home</a>
<a className="hover:text-amber-200" href="#">Menu</a>
<a className="hover:text-amber-200" href="#">About</a>
<a className="hover:text-amber-200" href="#">Contact</a>
</div>
<div>
<button className="bg-amber-50 text-amber-900 px-6 py-2 rounded-md">Order Now</button>
</div>
</div>
<div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200 text-sm">
                © 2024 Brew Haven Coffee Roasters. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
