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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="flex flex-col" href="#">
<span className="text-2xl font-medium tracking-tight leading-none text-stone-900">Latte Factory</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Hand Crafted Lattes</span>
</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#menu">Our Menu</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#contact">Contact Us</a>
</div>

<div className="hidden md:flex items-center">
<a className="group inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all hover:bg-amber-900 hover:shadow-lg hover:shadow-amber-900/20" href="#locations">
<span>ORDER NOW</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-20">
<div className="relative h-[85vh] w-full overflow-hidden">

<div className="absolute inset-0">
<img alt="Latte Factory Coffee Art" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-transparent to-transparent"></div>
</div>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-24">
<div className="max-w-2xl animate-fade-in-up">
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-6 leading-[1.1]">
                        Joy, One Sip <br/>
<span className="italic text-amber-100 font-light">at a Time</span>
</h1>
<p className="text-lg md:text-xl text-stone-200 mb-8 max-w-lg font-light leading-relaxed">
                        A welcoming space where exceptional coffee, authentic connections, and delightful experiences unite.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 border border-white/20 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white hover:text-stone-900 transition-all duration-300" href="#about">
                            About Us
                        </a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-amber-50 text-amber-900 rounded-full text-sm font-medium hover:bg-white transition-all duration-300 shadow-xl shadow-stone-900/10" href="#locations">
                            Find a Location
                        </a>
</div>
</div>
</div>
</div>

<section className="relative z-10 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300" href="#about">
<div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-900 mb-4 group-hover:bg-amber-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:coffee" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Learn About Us</h3>
<p className="text-sm text-stone-500">Discover our story and mission.</p>
</a>

<a className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300" href="#menu">
<div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-900 mb-4 group-hover:bg-amber-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:book-open" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Our Menu</h3>
<p className="text-sm text-stone-500">Explore handcrafted beverages.</p>
</a>

<a className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300" href="#locations">
<div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-900 mb-4 group-hover:bg-amber-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Come Visit Us</h3>
<p className="text-sm text-stone-500">Find your nearest factory.</p>
</a>

<a className="group bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-800 hover:shadow-xl hover:shadow-stone-900/20 hover:-translate-y-1 transition-all duration-300" href="#locations">
<div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-stone-900 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Order Ahead</h3>
<p className="text-sm text-stone-400">Skip the line, savor the time.</p>
</a>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100 relative">
<img alt="Latte Factory Atmosphere" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FAFAF9] rounded-full flex items-center justify-center p-4 hidden md:flex">
<div className="w-full h-full border border-stone-200 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
<svg className="w-full h-full text-stone-400" height="100" viewbox="0 0 100 100" width="100">
<defs>
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circle"></path>
</defs>
<text fontSize="11">
<textpath className="uppercase tracking-[0.2em] font-medium fill-current" xlink:href="#circle">
                                            Hand Crafted Lattes • Est 2024 •
                                        </textpath>
</text>
</svg>
</div>
<span className="iconify absolute text-amber-900" data-icon="lucide:heart" data-width="24"></span>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mb-8">
                            The Heart of the Community
                        </h2>
<div className="prose prose-lg prose-stone text-stone-600 font-light">
<p className="mb-6">
                                At Latte Factory, founded by a close-knit group of family and friends, our mission is to be the heart of the community—a welcoming space where exceptional coffee, authentic connections, and delightful experiences unite.
                            </p>
<p className="mb-8">
                                We are passionate about creating moments of joy, one sip at a time, offering a refuge for coffee lovers and visitors alike. Our dedication goes beyond serving expertly brewed coffee, refreshing beverages, and fresh pastries.
                            </p>
</div>
<div className="flex items-center gap-2 text-amber-900 font-medium cursor-pointer hover:gap-4 transition-all duration-300">
<span>Read our full story</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9]" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs font-semibold tracking-widest uppercase text-amber-900 mb-2 block">Our Offerings</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900">Signature Lattes</h2>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#menu">
                        View Full Menu
                        <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-6 relative">
<img alt="White Chocolate Latte" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&amp;w=1937&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">White Chocolate</h3>
<p className="text-sm text-stone-500 font-light">Creamy sweet indulgence</p>
</div>
<span className="h-8 w-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-6 relative">
<img alt="Vanilla Mocha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&amp;w=1870&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Vanilla Mocha</h3>
<p className="text-sm text-stone-500 font-light">Classic blend, refined</p>
</div>
<span className="h-8 w-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-6 relative">
<img alt="Sweet Cold Foam Coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517701604599-bb29b5c73553?q=80&amp;w=1870&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Sweet Cold Foam</h3>
<p className="text-sm text-stone-500 font-light">Velvety chilled texture</p>
</div>
<span className="h-8 w-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-6 relative">
<img alt="Salted Caramel Truffle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Salted Caramel Truffle</h3>
<p className="text-sm text-stone-500 font-light">Rich savory sweetness</p>
</div>
<span className="h-8 w-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs font-semibold tracking-widest uppercase text-amber-900 mb-2 block">Visit Us</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900">Find a Latte Factory Near You</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group border border-stone-100 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 bg-[#FAFAF9]">
<div className="aspect-video relative overflow-hidden">
<img alt="Downtown Location" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-green-700 flex items-center gap-1.5 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Open Now
                            </div>
</div>
<div className="p-8">
<h3 className="text-xl font-medium text-stone-900 mb-2">Downtown District</h3>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 text-stone-500">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:map-pin" data-width="16"></span>
<p className="text-sm font-light">123 Market Street, Suite 100<br/>City Center, ST 12345</p>
</div>
<div className="flex items-center gap-3 text-stone-500">
<span className="iconify text-stone-400" data-icon="lucide:clock" data-width="16"></span>
<p className="text-sm font-light">Mon-Sun: 6am - 8pm</p>
</div>
<div className="flex items-center gap-3 text-stone-500">
<span className="iconify text-stone-400" data-icon="lucide:phone" data-width="16"></span>
<p className="text-sm font-light">(555) 123-4567</p>
</div>
</div>
<div className="flex gap-3">
<a className="flex-1 inline-flex justify-center items-center px-4 py-3 bg-white border border-stone-200 text-stone-900 rounded-xl text-xs font-medium uppercase tracking-wide hover:border-stone-400 transition-colors" href="#">
                                    Directions
                                </a>
<a className="flex-1 inline-flex justify-center items-center px-4 py-3 bg-stone-900 text-white rounded-xl text-xs font-medium uppercase tracking-wide hover:bg-stone-800 transition-colors" href="#">
                                    Order
                                </a>
</div>
</div>
</div>

<div className="group border border-stone-100 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 bg-[#FAFAF9]">
<div className="aspect-video relative overflow-hidden">
<img alt="Westside Location" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-green-700 flex items-center gap-1.5 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Open Now
                            </div>
</div>
<div className="p-8">
<h3 className="text-xl font-medium text-stone-900 mb-2">Westside Plaza</h3>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 text-stone-500">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:map-pin" data-width="16"></span>
<p className="text-sm font-light">456 Oak Avenue, Building B<br/>Westside, ST 12345</p>
</div>
<div className="flex items-center gap-3 text-stone-500">
<span className="iconify text-stone-400" data-icon="lucide:clock" data-width="16"></span>
<p className="text-sm font-light">Mon-Sun: 6am - 9pm</p>
</div>
<div className="flex items-center gap-3 text-stone-500">
<span className="iconify text-stone-400" data-icon="lucide:phone" data-width="16"></span>
<p className="text-sm font-light">(555) 987-6543</p>
</div>
</div>
<div className="flex gap-3">
<a className="flex-1 inline-flex justify-center items-center px-4 py-3 bg-white border border-stone-200 text-stone-900 rounded-xl text-xs font-medium uppercase tracking-wide hover:border-stone-400 transition-colors" href="#">
                                    Directions
                                </a>
<a className="flex-1 inline-flex justify-center items-center px-4 py-3 bg-stone-900 text-white rounded-xl text-xs font-medium uppercase tracking-wide hover:bg-stone-800 transition-colors" href="#">
                                    Order
                                </a>
</div>
</div>
</div>

<div className="group border border-stone-100 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 bg-[#FAFAF9]">
<div className="aspect-video relative overflow-hidden">
<img alt="University Heights Location" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-stone-500 flex items-center gap-1.5 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                                Opens 7am
                            </div>
</div>
<div className="p-8">
<h3 className="text-xl font-medium text-stone-900 mb-2">University Heights</h3>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 text-stone-500">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:map-pin" data-width="16"></span>
<p className="text-sm font-light">789 College Boulevard<br/>University Park, ST 12345</p>
</div>
<div className="flex items-center gap-3 text-stone-500">
<span className="iconify text-stone-400" data-icon="lucide:clock" data-width="16"></span>
<p className="text-sm font-light">Mon-Fri: 7am - 10pm</p>
</div>
<div className="flex items-center gap-3 text-stone-500">
<span className="iconify text-stone-400" data-icon="lucide:phone" data-width="16"></span>
<p className="text-sm font-light">(555) 246-8101</p>
</div>
</div>
<div className="flex gap-3">
<a className="flex-1 inline-flex justify-center items-center px-4 py-3 bg-white border border-stone-200 text-stone-900 rounded-xl text-xs font-medium uppercase tracking-wide hover:border-stone-400 transition-colors" href="#">
                                    Directions
                                </a>
<a className="flex-1 inline-flex justify-center items-center px-4 py-3 bg-stone-900 text-white rounded-xl text-xs font-medium uppercase tracking-wide hover:bg-stone-800 transition-colors" href="#">
                                    Order
                                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#FAFAF9]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-center gap-2 mb-8 text-stone-500">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
<a className="text-sm font-medium uppercase tracking-widest hover:text-amber-900 transition-colors" href="https://www.instagram.com/thelattefactory/" target="_blank">Follow Us @thelattefactory</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">

<div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group">
<img alt="IG Post" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group">
<img alt="IG Post" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group">
<img alt="IG Post" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group">
<img alt="IG Post" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-medium tracking-tight text-stone-900 block mb-6" href="#">Latte Factory</a>
<p className="text-stone-500 font-light max-w-sm mb-6">
                        Creating authentic connections and moments of joy through the art of coffee.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-amber-900 transition-colors" href="https://www.instagram.com/thelattefactory/" target="_blank">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-stone-400 hover:text-amber-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="text-stone-400 hover:text-amber-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-stone-900 uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-4">
<li><a className="text-stone-500 hover:text-stone-900 font-light transition-colors" href="#about">About Us</a></li>
<li><a className="text-stone-500 hover:text-stone-900 font-light transition-colors" href="#menu">Our Menu</a></li>
<li><a className="text-stone-500 hover:text-stone-900 font-light transition-colors" href="#locations">Locations</a></li>
<li><a className="text-stone-500 hover:text-stone-900 font-light transition-colors" href="#contact">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-stone-900 uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-4">
<li><a className="text-stone-500 hover:text-stone-900 font-light transition-colors" href="#">Contact Support</a></li>
<li><a className="text-stone-500 hover:text-stone-900 font-light transition-colors" href="#">Feedback</a></li>
<li><a className="text-stone-500 hover:text-stone-900 font-light transition-colors" href="#">Franchising</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-light">
<p>© 2024 Latte Factory. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-600 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-stone-600 transition-colors" href="http://cspromedia.com" target="_blank">Powered By Pros</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
