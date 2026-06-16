import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="fixed top-0 z-50 w-full bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tight uppercase font-serif" href="#">AURA</a>
<div className="hidden md:flex items-center gap-6 text-sm text-stone-500 font-normal">
<a className="hover:text-stone-900 transition-colors" href="#story">Story</a>
<a className="hover:text-stone-900 transition-colors" href="#menu-preview">Menu</a>
<a className="hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-stone-900 transition-colors" href="#visit">Visit</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-normal text-stone-900 hover:text-stone-500 transition-colors hidden sm:block" href="#visit">Book a Table</a>
<a className="text-sm font-medium bg-stone-900 text-[#FAFAF9] px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors shadow-sm" href="#menu">
                    Order Ahead
                </a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center">

<div className="absolute inset-0 w-full h-full">
<img alt="Cinematic café atmosphere" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-stone-900/40"></div>
</div>

<div className="relative z-10 max-w-3xl mx-auto px-6 space-y-8 mt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-[#FAFAF9] border border-white/20">
<span className="w-2 h-2 rounded-full bg-stone-300"></span>
                Now roasting single-origin beans
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] font-serif">
                A Global Café Experience, <br/> <span className="italic font-normal">Right Here.</span>
</h1>
<p className="text-lg text-stone-200 font-normal max-w-lg mx-auto leading-relaxed">
                Comfort, creativity, and exceptional flavor woven into your daily ritual. A sanctuary designed for connection.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto text-sm font-medium bg-[#FAFAF9] text-stone-900 px-6 py-3 rounded-lg hover:bg-white transition-colors shadow-sm" href="#menu-preview">
                    View Menu
                </a>
<a className="w-full sm:w-auto text-sm font-medium text-white bg-transparent border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors" href="#visit">
                    Visit Us
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32" id="story">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 space-y-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-serif">Our Story</h2>
<p className="text-base text-stone-500 leading-relaxed">
                    AURA began as a pursuit of the perfect cup and evolved into a sanctuary for our community. We believe in the power of a quiet moment and the warmth of shared experiences. 
                </p>
<p className="text-base text-stone-500 leading-relaxed">
                    By partnering directly with farmers and focusing on an inviting, beautifully curated aesthetic, our space strips away distractions, leaving only genuine connection and crafted excellence for creators, thinkers, and lovers of fine food.
                </p>
</div>
<div className="flex-1 w-full">
<img alt="Warm cafe interior" className="w-full aspect-[4/5] object-cover rounded-2xl shadow-sm border border-stone-200" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</section>

<section className="py-24 bg-stone-100/50 border-y border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 font-serif mb-4">Signature Creations</h2>
<p className="text-base text-stone-500 max-w-xl">Carefully conceptualized dishes and drinks that define the AURA experience. A blend of culinary artistry and comforting familiarity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 border border-stone-200">
<img alt="Signature Latte" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-1 tracking-tight font-serif">Smoked Vanilla Cortado</h3>
<p className="text-sm text-stone-500">House-smoked vanilla bean syrup, equal parts espresso and textured milk, dusted with raw cacao.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 border border-stone-200">
<img alt="Truffle Toast" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-1 tracking-tight font-serif">Wild Mushroom Tartine</h3>
<p className="text-sm text-stone-500">Foraged seasonal mushrooms, whipped ricotta, truffle oil, and micro-thyme on thick-cut sourdough.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 border border-stone-200">
<img alt="Matcha" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-1 tracking-tight font-serif">Kyoto Rose Matcha</h3>
<p className="text-sm text-stone-500">Ceremonial grade matcha whisked to perfection, layered over iced oat milk with a hint of rose water.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 font-serif mb-12">Most Loved</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative bg-white rounded-xl border border-stone-200 p-4 shadow-sm hover:shadow-md transition-shadow">
<span className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur text-stone-900 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Customer Favorite</span>
<img alt="Pour over" className="w-full aspect-square object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<h3 className="text-base font-medium text-stone-900 tracking-tight">Ethiopia Yirgacheffe</h3>
<p className="text-sm text-stone-500 mt-1 mb-3 line-clamp-2">Floral notes, jasmine, and bright citrus. Best enjoyed as a pour-over.</p>
<span className="text-sm font-medium text-stone-900">$6.50</span>
</div>

<div className="relative bg-white rounded-xl border border-stone-200 p-4 shadow-sm hover:shadow-md transition-shadow">
<span className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur text-stone-900 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Chef's Pick</span>
<img alt="Croissant" className="w-full aspect-square object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1620921575454-061033fa2699?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<h3 className="text-base font-medium text-stone-900 tracking-tight">Twice-Baked Almond</h3>
<p className="text-sm text-stone-500 mt-1 mb-3 line-clamp-2">Flaky, buttery pastry filled with house-made frangipane cream.</p>
<span className="text-sm font-medium text-stone-900">$5.00</span>
</div>

<div className="relative bg-white rounded-xl border border-stone-200 p-4 shadow-sm hover:shadow-md transition-shadow">
<img alt="Espresso" className="w-full aspect-square object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<h3 className="text-base font-medium text-stone-900 tracking-tight">AURA House Espresso</h3>
<p className="text-sm text-stone-500 mt-1 mb-3 line-clamp-2">Our signature blend with notes of dark chocolate and caramel.</p>
<span className="text-sm font-medium text-stone-900">$3.50</span>
</div>

<div className="relative bg-white rounded-xl border border-stone-200 p-4 shadow-sm hover:shadow-md transition-shadow">
<span className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur text-stone-900 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Most Loved</span>
<img alt="Avocado Toast" className="w-full aspect-square object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<h3 className="text-base font-medium text-stone-900 tracking-tight">Heirloom Avocado Toast</h3>
<p className="text-sm text-stone-500 mt-1 mb-3 line-clamp-2">Smashed avocado, heirloom tomatoes, radish, and chili flakes.</p>
<span className="text-sm font-medium text-stone-900">$12.00</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200" id="menu-preview">
<div className="max-w-7xl mx-auto px-6 space-y-24">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 font-serif mb-4">Curated Offerings</h2>
<p className="text-base text-stone-500">A glimpse into our meticulously crafted menu, honoring both timeless traditions and modern palates.</p>
</div>

<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 w-full order-2 md:order-1">
<h3 className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-8 border-b border-stone-100 pb-2">Breakfast &amp; Brunch</h3>
<div className="space-y-6">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-base font-medium text-stone-900">Shakshuka</p>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">Poached farm eggs, spiced tomato ragout, feta, sourdough</p>
</div>
<span className="text-sm font-medium text-stone-900">$14.00</span>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-base font-medium text-stone-900">Ricotta Pancakes</p>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">Fluffy cakes, honeycomb butter, seasonal berry compote</p>
</div>
<span className="text-sm font-medium text-stone-900">$13.50</span>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-base font-medium text-stone-900">Overnight Chia Bowl</p>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">Coconut milk, mango puree, toasted macadamias</p>
</div>
<span className="text-sm font-medium text-stone-900">$9.00</span>
</div>
</div>
</div>
<div className="flex-1 w-full order-1 md:order-2">
<img alt="Breakfast setup" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm border border-stone-100" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 w-full">
<img alt="Barista pouring coffee" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm border border-stone-100" src="https://images.unsplash.com/photo-1507133750070-4ed01ebdc91c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="flex-1 w-full">
<h3 className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-8 border-b border-stone-100 pb-2">Café Favorites</h3>
<div className="space-y-6">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-base font-medium text-stone-900">Oat Milk Flat White</p>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">Double ristretto, silky microfoam</p>
</div>
<span className="text-sm font-medium text-stone-900">$5.00</span>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-base font-medium text-stone-900">Iced Hojicha Latte</p>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">Roasted green tea, light maple syrup, milk of choice</p>
</div>
<span className="text-sm font-medium text-stone-900">$5.50</span>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-base font-medium text-stone-900">Cold Brew Tonic</p>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">24hr cold brew, artisan tonic water, orange peel</p>
</div>
<span className="text-sm font-medium text-stone-900">$6.00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#2A2522] text-[#FAFAF9] text-center px-6">
<h2 className="text-2xl font-medium tracking-tight font-serif mb-6">Hungry for more?</h2>
<a className="inline-flex items-center justify-center text-sm font-medium bg-[#FAFAF9] text-[#2A2522] px-6 py-3 rounded-lg hover:bg-stone-200 transition-colors shadow-sm" href="#menu">
            Explore Full Menu
        </a>
</section>

<section className="py-24 bg-[#FAFAF9]" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 font-serif mb-12 text-center">Moments at AURA</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="col-span-2 row-span-2 rounded-xl overflow-hidden group">
<img alt="Gallery Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="rounded-xl overflow-hidden group">
<img alt="Gallery Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="rounded-xl overflow-hidden group">
<img alt="Gallery Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="col-span-2 md:col-span-1 row-span-2 rounded-xl overflow-hidden group">
<img alt="Gallery Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="rounded-xl overflow-hidden group hidden md:block">
<img alt="Gallery Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100/50 border-t border-stone-200">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 font-serif">Our Philosophy</h2>
<p className="text-lg text-stone-500 font-normal leading-relaxed">
                We draw inspiration from minimal, intentional living. Every element of AURA—from the muted tones of our walls to the ethically sourced beans we roast—is chosen to cultivate a sense of calm. Our founder envisioned a space where the noise of the city fades, replaced by the quiet hum of productivity and the rich aroma of honest food.
            </p>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 font-serif mb-12 text-center">Community Voices</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 border border-stone-200 rounded-2xl bg-[#FAFAF9]">
<div className="flex gap-1 mb-6 text-stone-800">
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-base text-stone-600 mb-8 leading-relaxed">"The best pour-over in the city. The space is incredibly calming, making it my go-to spot for deep work sessions. The food is equally impressive."</p>
<div>
<p className="text-sm font-medium text-stone-900">Sarah Jenkins</p>
<p className="text-xs text-stone-400">Local Guide</p>
</div>
</div>

<div className="p-8 border border-stone-200 rounded-2xl bg-[#FAFAF9]">
<div className="flex gap-1 mb-6 text-stone-800">
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-base text-stone-600 mb-8 leading-relaxed">"Their signature smoked vanilla cortado ruined all other lattes for me. It's perfectly balanced. Plus, the minimalist aesthetic is gorgeous."</p>
<div>
<p className="text-sm font-medium text-stone-900">David Chen</p>
<p className="text-xs text-stone-400">Design Director</p>
</div>
</div>

<div className="p-8 border border-stone-200 rounded-2xl bg-[#FAFAF9]">
<div className="flex gap-1 mb-6 text-stone-800">
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-base text-stone-600 mb-8 leading-relaxed">"A true sanctuary in the middle of a busy district. High-quality ingredients and you can taste the dedication in every single dish."</p>
<div>
<p className="text-sm font-medium text-stone-900">Elena Rodriguez</p>
<p className="text-xs text-stone-400">Food Critic</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100/50 border-t border-stone-200" id="visit">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">

<div className="flex-1 space-y-12">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 leading-tight font-serif mb-4">
                        Join us for your <br/> next ritual.
                    </h2>
<p className="text-lg text-stone-500 font-normal max-w-md">
                        Whether dropping in for a quick morning espresso or settling in for an afternoon of deep work.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

<div>
<h4 className="text-sm font-medium text-stone-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
<iconify-icon className="text-stone-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
                            Visit
                        </h4>
<p className="text-sm text-stone-500 leading-relaxed font-normal">
                            142 Minimalist Ave<br/>
                            Design District<br/>
                            San Francisco, CA 94103
                        </p>
</div>

<div>
<h4 className="text-sm font-medium text-stone-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
<iconify-icon className="text-stone-400 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                            Hours
                        </h4>
<ul className="text-sm text-stone-500 space-y-2 font-normal">
<li className="flex justify-between items-center gap-4">
<span>Mon - Fri</span>
<span className="text-stone-900 font-medium">7am - 4pm</span>
</li>
<li className="flex justify-between items-center gap-4">
<span>Saturday</span>
<span className="text-stone-900 font-medium">8am - 5pm</span>
</li>
<li className="flex justify-between items-center gap-4">
<span>Sunday</span>
<span className="text-stone-900 font-medium">8am - 3pm</span>
</li>
</ul>
</div>
</div>
<div className="pt-4 flex items-center gap-4">
<a className="text-sm font-medium bg-stone-900 text-[#FAFAF9] px-6 py-3 rounded-lg hover:bg-stone-800 transition-colors shadow-sm" href="#">
                        Get Directions
                    </a>
<a className="text-sm font-medium text-stone-600 bg-white border border-stone-200 px-6 py-3 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors" href="tel:+15551234567">
                        Call Us
                    </a>
</div>
</div>

<div className="flex-1 w-full">
<div className="bg-white p-2 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden group">
<img alt="Cafe exterior" className="w-full aspect-[4/3] object-cover rounded-xl grayscale-[20%] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-stone-900/10 pointer-events-none rounded-xl"></div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 border-b border-stone-100 pb-8">
<a className="text-2xl font-medium tracking-tight uppercase font-serif text-stone-900" href="#">AURA</a>
<div className="flex flex-wrap items-center justify-center gap-8 text-sm text-stone-500 font-normal">
<a className="hover:text-stone-900 transition-colors" href="#story">About</a>
<a className="hover:text-stone-900 transition-colors" href="#menu-preview">Menu</a>
<a className="hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-stone-900 transition-colors" href="#visit">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:map-arrow-linear"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-normal">
<p>© 2024 Aura Cafe. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-stone-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
