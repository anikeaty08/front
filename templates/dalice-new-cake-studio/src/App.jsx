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
cream: '#FFFEFC',
cocoa: {
50: '#F7F5F4',
100: '#EBE8E6',
400: '#9C928F',
500: '#7D726F',
800: '#4A3E3B',
900: '#2E2624',
},
marshmallow: {
50: '#FEF5F7',
100: '#FDE8ED',
200: '#FBCFD9',
300: '#F9A8BC',
400: '#F47AA0',
500: '#E84A7D',
},
pistachio: {
50: '#F5F9F5',
100: '#E8F3E8',
200: '#D1E6D1',
300: '#A4CEA4',
400: '#7AB07A',
800: '#3D5C3D',
900: '#2D452D',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/20 bg-cream/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<button className="md:hidden p-2 text-cocoa-800 hover:text-marshmallow-400 transition-colors">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>

<a className="text-3xl font-serif italic font-medium tracking-tight text-cocoa-900 flex items-center gap-2" href="#">
                d'alice
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-cocoa-500 hover:text-pistachio-800 transition-colors" href="#">Patisserie</a>
<a className="text-sm font-medium text-cocoa-500 hover:text-marshmallow-500 transition-colors" href="#">Viennoiserie</a>
<a className="text-sm font-medium text-cocoa-500 hover:text-pistachio-800 transition-colors" href="#">Gifting</a>
<a className="text-sm font-medium text-cocoa-500 hover:text-marshmallow-500 transition-colors" href="#">Journal</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-cocoa-500 hover:text-cocoa-900 transition-colors">
                    Search
                </button>
<button className="relative w-10 h-10 flex items-center justify-center bg-pistachio-100/50 text-pistachio-900 rounded-full hover:bg-pistachio-200 transition-colors group">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-marshmallow-400 rounded-full ring-2 ring-cream scale-0 group-hover:scale-100 transition-transform"></span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-marshmallow-100 rounded-full blur-3xl opacity-60 -z-10 mix-blend-multiply"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pistachio-100 rounded-full blur-3xl opacity-60 -z-10 mix-blend-multiply"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 text-center lg:text-left space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-marshmallow-200 bg-marshmallow-50/50 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-marshmallow-400 animate-pulse"></span>
<span className="text-xs font-semibold text-cocoa-800 uppercase tracking-widest">Spring / Summer '24</span>
</div>
<h1 className="text-6xl md:text-8xl font-serif text-cocoa-900 leading-[0.9] -tracking-[0.03em]">
                        Sweetness <br/>
<span className="italic text-marshmallow-400">reimagined</span>
</h1>
<p className="text-lg md:text-xl text-cocoa-500 font-light max-w-md mx-auto lg:mx-0 leading-relaxed">
                        An exploration of pastel hues and delicate flavors. Experience the intersection of modern design and classic French pastry.
                    </p>
<div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
<a className="group relative px-8 py-4 bg-cocoa-900 text-cream rounded-[2rem] text-sm font-medium transition-all hover:bg-pistachio-900 hover:shadow-xl hover:shadow-pistachio-200 overflow-hidden" href="#collection">
<span className="relative z-10 flex items-center gap-2">
                                Shop Collection
                                <span className="iconify group-hover:rotate-45 transition-transform duration-300" data-icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}}></span>
</span>
</a>
<button className="w-12 h-12 rounded-full border border-cocoa-200 flex items-center justify-center hover:bg-white hover:border-white hover:shadow-lg hover:text-marshmallow-400 transition-all duration-300">
<span className="iconify" data-icon="lucide:play" data-width="16" style={{fill: 'currentColor', strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="lg:col-span-6 relative h-[600px] hidden lg:block">

<div className="absolute top-10 right-10 w-72 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 z-10 border-4 border-white">
<img alt="Macarons" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-20 left-10 w-64 aspect-square rounded-[2rem] overflow-hidden shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-700 z-20 border-4 border-white">
<img alt="Cake Slice" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563729768-6af584667808?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-pistachio-300 rounded-full opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] border border-marshmallow-300 rounded-full opacity-30"></div>
</div>
</div>
</div>
</section>

<div className="bg-pistachio-100/50 py-4 border-y border-pistachio-200 overflow-hidden flex">
<div className="animate-[slide_20s_linear_infinite] whitespace-nowrap flex gap-16 items-center px-4">
<span className="text-sm font-medium uppercase tracking-widest text-pistachio-800 flex items-center gap-4">
<span className="iconify" data-icon="lucide:star" data-width="12"></span> Freshly Baked
            </span>
<span className="text-sm font-medium uppercase tracking-widest text-pistachio-800 flex items-center gap-4">
<span className="iconify" data-icon="lucide:star" data-width="12"></span> Organic Ingredients
            </span>
<span className="text-sm font-medium uppercase tracking-widest text-pistachio-800 flex items-center gap-4">
<span className="iconify" data-icon="lucide:star" data-width="12"></span> Zero Waste
            </span>
<span className="text-sm font-medium uppercase tracking-widest text-pistachio-800 flex items-center gap-4">
<span className="iconify" data-icon="lucide:star" data-width="12"></span> Handcrafted in Paris
            </span>
<span className="text-sm font-medium uppercase tracking-widest text-pistachio-800 flex items-center gap-4">
<span className="iconify" data-icon="lucide:star" data-width="12"></span> Freshly Baked
            </span>
<span className="text-sm font-medium uppercase tracking-widest text-pistachio-800 flex items-center gap-4">
<span className="iconify" data-icon="lucide:star" data-width="12"></span> Organic Ingredients
            </span>
<span className="text-sm font-medium uppercase tracking-widest text-pistachio-800 flex items-center gap-4">
<span className="iconify" data-icon="lucide:star" data-width="12"></span> Zero Waste
            </span>
<span className="text-sm font-medium uppercase tracking-widest text-pistachio-800 flex items-center gap-4">
<span className="iconify" data-icon="lucide:star" data-width="12"></span> Handcrafted in Paris
            </span>
</div>
<style>
            @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        </style>
</div>

<section className="py-24 px-4 md:px-6">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="h-[600px] md:h-[700px] rounded-[2.5rem] overflow-hidden relative group shadow-2xl shadow-marshmallow-100">
<img alt="Pink Cake" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/60 to-transparent"></div>
<div className="absolute bottom-10 left-10 text-cream">
<span className="bg-marshmallow-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Best Seller</span>
<h3 className="text-4xl md:text-5xl font-serif italic mb-3">Rose &amp; Lychee</h3>
<p className="text-marshmallow-100 font-light max-w-sm">Delicate rose mousse with a lychee center on a pistachio financier base.</p>
</div>
</div>
<div className="space-y-12 p-8 md:p-16">
<h2 className="text-4xl font-serif text-cocoa-900">A symphony of <br/><span className="text-pistachio-400 italic">pastel flavors.</span></h2>
<div className="space-y-8">
<div className="flex gap-6 items-start group">
<div className="w-14 h-14 rounded-2xl bg-marshmallow-50 flex items-center justify-center text-marshmallow-400 group-hover:bg-marshmallow-400 group-hover:text-white transition-all duration-300 shrink-0">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="text-lg font-medium text-cocoa-900 mb-2">Made with Love</h4>
<p className="text-sm text-cocoa-500 leading-relaxed">Every pastry is a labor of love, crafted by hand in our open kitchen using traditional techniques.</p>
</div>
</div>
<div className="flex gap-6 items-start group">
<div className="w-14 h-14 rounded-2xl bg-pistachio-50 flex items-center justify-center text-pistachio-400 group-hover:bg-pistachio-400 group-hover:text-white transition-all duration-300 shrink-0">
<span className="iconify" data-icon="lucide:flower-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="text-lg font-medium text-cocoa-900 mb-2">Natural Colors</h4>
<p className="text-sm text-cocoa-500 leading-relaxed">Our vibrant palette comes strictly from nature: beetroot, matcha, raspberry, and butterfly pea flower.</p>
</div>
</div>
</div>
<button className="text-sm font-medium text-cocoa-900 border-b border-cocoa-900 pb-1 hover:text-marshmallow-500 hover:border-marshmallow-500 transition-colors">
                    Read our philosophy
                </button>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-white to-marshmallow-50/30" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl font-serif text-cocoa-900 mb-3">The Counter</h2>
<p className="text-cocoa-500 font-light">Daily selections from the atelier.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full bg-cocoa-900 text-white text-sm">All</button>
<button className="px-4 py-2 rounded-full border border-cocoa-100 text-cocoa-500 text-sm hover:border-cocoa-300 hover:text-cocoa-900 transition-colors">Cakes</button>
<button className="px-4 py-2 rounded-full border border-cocoa-100 text-cocoa-500 text-sm hover:border-cocoa-300 hover:text-cocoa-900 transition-colors">Viennoiserie</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-marshmallow-50 rounded-[2rem] overflow-hidden mb-6 p-6 flex items-center justify-center">
<div className="absolute inset-0 bg-marshmallow-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Velvet Cake" className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 ease-out z-10" src="https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-20">
<span className="bg-white/80 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-cocoa-900">$12</span>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 z-20 w-11/12 bg-white/90 backdrop-blur shadow-lg text-cocoa-900 py-3 rounded-xl text-sm font-medium hover:bg-cocoa-900 hover:text-white">
                            Add to Bag
                        </button>
</div>
<div className="text-center">
<h3 className="text-lg font-serif italic text-cocoa-900">Raspberry Cloud</h3>
<p className="text-xs text-cocoa-400 mt-1 uppercase tracking-wide">Choux Pastry</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-pistachio-50 rounded-[2rem] overflow-hidden mb-6 p-6 flex items-center justify-center">
<div className="absolute inset-0 bg-pistachio-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Macarons" className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500 ease-out z-10" src="https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-20">
<span className="bg-white/80 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-cocoa-900">$24</span>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 z-20 w-11/12 bg-white/90 backdrop-blur shadow-lg text-cocoa-900 py-3 rounded-xl text-sm font-medium hover:bg-cocoa-900 hover:text-white">
                            Add to Bag
                        </button>
</div>
<div className="text-center">
<h3 className="text-lg font-serif italic text-cocoa-900">Pistachio Box</h3>
<p className="text-xs text-cocoa-400 mt-1 uppercase tracking-wide">Box of 6</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-cream border border-cocoa-50 rounded-[2rem] overflow-hidden mb-6 p-6 flex items-center justify-center">
<img alt="Tart" className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 ease-out z-10" src="https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-20">
<span className="bg-white/80 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-cocoa-900">$9</span>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 z-20 w-11/12 bg-white/90 backdrop-blur shadow-lg text-cocoa-900 py-3 rounded-xl text-sm font-medium hover:bg-cocoa-900 hover:text-white">
                            Add to Bag
                        </button>
</div>
<div className="text-center">
<h3 className="text-lg font-serif italic text-cocoa-900">Lemon Drop</h3>
<p className="text-xs text-cocoa-400 mt-1 uppercase tracking-wide">Meringue Tart</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-marshmallow-50 rounded-[2rem] overflow-hidden mb-6 p-6 flex items-center justify-center">
<div className="absolute inset-0 bg-marshmallow-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Donut" className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500 ease-out z-10" src="https://images.unsplash.com/photo-1557308536-ee471ef2c39a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-20">
<span className="bg-white/80 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-cocoa-900">$7</span>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 z-20 w-11/12 bg-white/90 backdrop-blur shadow-lg text-cocoa-900 py-3 rounded-xl text-sm font-medium hover:bg-cocoa-900 hover:text-white">
                            Add to Bag
                        </button>
</div>
<div className="text-center">
<h3 className="text-lg font-serif italic text-cocoa-900">Strawberry Glaze</h3>
<p className="text-xs text-cocoa-400 mt-1 uppercase tracking-wide">Artisan Donut</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-pistachio-900 rounded-[3rem] overflow-hidden relative">

<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="p-12 lg:p-24 space-y-8">
<h2 className="text-4xl md:text-6xl font-serif text-pistachio-50">Weddings &amp; <br/><span className="italic text-pistachio-300">Celebrations</span></h2>
<p className="text-pistachio-100/80 font-light text-lg leading-relaxed max-w-md">
                            From towering croquembouche to delicate macaron towers, we create centerpieces that are as memorable as your special day.
                        </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="bg-pistachio-50 text-pistachio-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-white transition-colors">
                                Download Brochure
                            </button>
<button className="px-8 py-4 rounded-full text-sm font-medium text-pistachio-50 border border-pistachio-700 hover:bg-pistachio-800 transition-colors">
                                Book Consultation
                            </button>
</div>
</div>
<div className="h-full min-h-[500px] relative bg-pistachio-800/50 backdrop-blur-sm">
<img alt="Wedding Cake" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-pistachio-900 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-marshmallow-50/50">
<div className="max-w-xl mx-auto px-6 text-center space-y-8">
<span className="iconify mx-auto text-marshmallow-400" data-icon="lucide:mail-open" data-width="40" style={{strokeWidth: '1'}}></span>
<div>
<h3 className="text-3xl font-serif text-cocoa-900 mb-3">Sweet Talk</h3>
<p className="text-cocoa-500 font-light">Join our list for exclusive flavors and seasonal previews.</p>
</div>
<form className="relative flex items-center">
<input className="w-full bg-white border-0 text-cocoa-900 text-sm rounded-full pl-6 pr-32 py-4 focus:outline-none focus:ring-2 focus:ring-marshmallow-300 placeholder:text-cocoa-300 shadow-xl shadow-marshmallow-100" placeholder="bonjour@example.com" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-cocoa-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-marshmallow-500 transition-colors" type="button">
                    Join
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-cocoa-50 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-4 space-y-6">
<a className="text-4xl font-serif italic font-medium tracking-tight text-cocoa-900" href="#">d'alice</a>
<p className="text-sm text-cocoa-500 font-light max-w-xs leading-relaxed">
                        A modern patisserie blending visual art with culinary excellence in the heart of Paris.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-cocoa-50 flex items-center justify-center text-cocoa-600 hover:bg-marshmallow-100 hover:text-marshmallow-500 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="w-10 h-10 rounded-full bg-cocoa-50 flex items-center justify-center text-cocoa-600 hover:bg-pistachio-100 hover:text-pistachio-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
</div>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="text-cocoa-900 font-semibold mb-6 text-sm">Shop</h4>
<ul className="space-y-4 text-sm text-cocoa-500 font-light">
<li><a className="hover:text-marshmallow-500 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-marshmallow-500 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-marshmallow-500 transition-colors" href="#">Vegan</a></li>
<li><a className="hover:text-marshmallow-500 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-cocoa-900 font-semibold mb-6 text-sm">About</h4>
<ul className="space-y-4 text-sm text-cocoa-500 font-light">
<li><a className="hover:text-pistachio-500 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-pistachio-500 transition-colors" href="#">The Atelier</a></li>
<li><a className="hover:text-pistachio-500 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-pistachio-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-cocoa-900 font-semibold mb-6 text-sm">Visit</h4>
<ul className="space-y-4 text-sm text-cocoa-500 font-light">
<li>12 Rue de la Paix<br/>75002 Paris</li>
<li>Mon - Sun: 8am - 7pm</li>
<li><a className="hover:text-cocoa-900 underline decoration-cocoa-200 underline-offset-4" href="mailto:hello@dalice.com">hello@dalice.com</a></li>
</ul>
</div>
</div>
<div className="border-t border-cocoa-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cocoa-400 font-light">
<p>© 2024 d'alice Confectionery.</p>
<div className="flex gap-8">
<a className="hover:text-cocoa-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-cocoa-600 transition-colors" href="#">Terms</a>
<a className="hover:text-cocoa-600 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
