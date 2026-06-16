import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth reveal animation on scroll can be added here
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('py-2');
                nav.classList.remove('py-4');
            } else {
                nav.classList.add('py-4');
                nav.classList.remove('py-2');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-[#F5F4ED]/80 backdrop-blur-md border-b border-[#5D5D5A]/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-light">
<a className="hover:text-black transition-colors" href="#collection">Collection</a>
<a className="hover:text-black transition-colors" href="#story">Story</a>
<a className="hover:text-black transition-colors" href="#shop">Shop</a>
</div>
<a className="text-2xl font-medium tracking-tighter text-black" href="#">LUXYPARFUM</a>
<div className="flex items-center gap-6">
<button className="hover:text-black transition-colors flex items-center">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:text-black transition-colors flex items-center relative">
<iconify-icon height="20" icon="solar:bag-heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#CBCEEA] text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
</button>
<button className="md:hidden flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Perfume" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#F5F4ED] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-2xl">
<span className="block text-xs uppercase tracking-[0.3em] mb-6 opacity-80">The 2024 Collection</span>
<h1 className="text-6xl md:text-8xl font-light tracking-tight leading-tight mb-8 text-black">
                    Discover the Art <br/>of <span className="italic font-normal">Fragrance</span>
</h1>
<p className="text-lg font-light mb-10 max-w-md leading-relaxed">
                    A curated selection of olfactory masterpieces, blending timeless elegance with modern emotion.
                </p>
<a className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 text-xs uppercase tracking-widest hover:bg-[#5D5D5A] transition-all duration-300" href="#collection">
                    Explore the Collection
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="collection">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-xs uppercase tracking-widest opacity-60 mb-2 block">Our Signature</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-black">New Arrivals</h2>
</div>
<a className="text-sm border-b border-black pb-1 hover:opacity-60 transition-opacity" href="#">View All Scents</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="perfume-card group cursor-pointer">
<div className="aspect-[4/5] bg-white overflow-hidden mb-6 relative">
<img alt="Azure Night" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="cart-btn absolute bottom-0 left-0 right-0 bg-black/90 text-white py-4 text-xs uppercase tracking-widest opacity-0 translate-y-full transition-all duration-500">
                        Add to Cart
                    </button>
</div>
<div className="text-center px-4">
<h3 className="text-2xl mb-1 text-black">Azure Night</h3>
<p className="text-xs opacity-60 mb-3 tracking-wide">Bergamot • Sandalwood • Oud</p>
<span className="text-sm font-light">$185.00</span>
</div>
</div>

<div className="perfume-card group cursor-pointer">
<div className="aspect-[4/5] bg-[#F8E5E5] overflow-hidden mb-6 relative">
<img alt="Rose Petal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="cart-btn absolute bottom-0 left-0 right-0 bg-black/90 text-white py-4 text-xs uppercase tracking-widest opacity-0 translate-y-full transition-all duration-500">
                        Add to Cart
                    </button>
</div>
<div className="text-center px-4">
<h3 className="text-2xl mb-1 text-black">Rose Petal</h3>
<p className="text-xs opacity-60 mb-3 tracking-wide">Damask Rose • Pink Pepper • Musk</p>
<span className="text-sm font-light">$160.00</span>
</div>
</div>

<div className="perfume-card group cursor-pointer">
<div className="aspect-[4/5] bg-[#DEF1D0] overflow-hidden mb-6 relative">
<img alt="Garden Mist" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="cart-btn absolute bottom-0 left-0 right-0 bg-black/90 text-white py-4 text-xs uppercase tracking-widest opacity-0 translate-y-full transition-all duration-500">
                        Add to Cart
                    </button>
</div>
<div className="text-center px-4">
<h3 className="text-2xl mb-1 text-black">Garden Mist</h3>
<p className="text-xs opacity-60 mb-3 tracking-wide">Green Tea • Jasmine • Cedar</p>
<span className="text-sm font-light">$145.00</span>
</div>
</div>

<div className="perfume-card group cursor-pointer">
<div className="aspect-[4/5] bg-[#CDEBF1] overflow-hidden mb-6 relative">
<img alt="Ocean Breeze" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="cart-btn absolute bottom-0 left-0 right-0 bg-black/90 text-white py-4 text-xs uppercase tracking-widest opacity-0 translate-y-full transition-all duration-500">
                        Add to Cart
                    </button>
</div>
<div className="text-center px-4">
<h3 className="text-2xl mb-1 text-black">Ocean Breeze</h3>
<p className="text-xs opacity-60 mb-3 tracking-wide">Sea Salt • Amber • Grapefruit</p>
<span className="text-sm font-light">$170.00</span>
</div>
</div>
</div>
</section>

<section className="bg-[#F8E5E5] py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-16">
<h2 className="text-4xl md:text-6xl tracking-tight text-black text-center mb-4 italic">The Autumn Edit</h2>
<p className="text-center max-w-xl mx-auto font-light">Warm, enveloping notes designed for the turning of the leaves.</p>
</div>
<div className="flex gap-12 px-6 overflow-x-auto pb-12 snap-x no-scrollbar">
<div className="min-w-[300px] md:min-w-[450px] snap-center">
<div className="bg-white/40 p-12 aspect-square flex flex-col justify-between hover:bg-white/60 transition-colors duration-500">
<iconify-icon className="text-black" height="32" icon="solar:star-fall-linear" width="32"></iconify-icon>
<div>
<h3 className="text-3xl mb-4 text-black">Golden Amber</h3>
<p className="text-sm font-light mb-6 opacity-80">A deep, resinous scent that captures the golden hour in the heart of the forest.</p>
<button className="text-xs uppercase tracking-widest font-medium border-b border-black pb-1">Learn More</button>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[450px] snap-center">
<div className="bg-white/40 p-12 aspect-square flex flex-col justify-between hover:bg-white/60 transition-colors duration-500">
<iconify-icon className="text-black" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
<div>
<h3 className="text-3xl mb-4 text-black">Velvet Moss</h3>
<p className="text-sm font-light mb-6 opacity-80">Earthy, sophisticated, and hauntingly beautiful. A tribute to the forest floor.</p>
<button className="text-xs uppercase tracking-widest font-medium border-b border-black pb-1">Learn More</button>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[450px] snap-center">
<div className="bg-white/40 p-12 aspect-square flex flex-col justify-between hover:bg-white/60 transition-colors duration-500">
<iconify-icon className="text-black" height="32" icon="solar:fire-linear" width="32"></iconify-icon>
<div>
<h3 className="text-3xl mb-4 text-black">Smoked Vanilla</h3>
<p className="text-sm font-light mb-6 opacity-80">The sweetness of vanilla pods balanced with the charred edge of cedar wood.</p>
<button className="text-xs uppercase tracking-widest font-medium border-b border-black pb-1">Learn More</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="story">
<div className="max-w-3xl mx-auto text-center">
<span className="text-xs uppercase tracking-[0.4em] opacity-40 mb-10 block">Our Philosophy</span>
<h2 className="text-4xl md:text-6xl tracking-tight text-black mb-12 leading-tight">
                LUXYPARFUM is a modern fragrance house inspired by <span className="italic font-normal">elegance</span>, emotion, and timeless scents.
            </h2>
<p className="text-lg font-light leading-relaxed opacity-70 mb-12">
                Founded in the pursuit of olfactory perfection, we believe that a scent is more than just a fragrance—it's a silent signature, an invisible layer of your identity. Every bottle is crafted with the finest raw materials ethically sourced from around the globe.
            </p>
<div className="flex justify-center gap-12 grayscale opacity-50">
<iconify-icon height="40" icon="solar:leaf-linear" width="40"></iconify-icon>
<iconify-icon height="40" icon="solar:clover-linear" width="40"></iconify-icon>
<iconify-icon height="40" icon="solar:water-drops-linear" width="40"></iconify-icon>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[80vh]">
<div className="h-full overflow-hidden">
<img alt="Process" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="h-full overflow-hidden hidden md:block">
<img alt="Ingredients" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="h-full overflow-hidden hidden lg:block">
<img alt="Lifestyle" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1615484477201-9f4953340fab?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</section>

<section className="py-24 bg-[#F5F4ED]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="flex flex-col gap-6">
<div className="flex gap-1 text-[#CBCEEA]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-xl serif italic text-black leading-relaxed">"The most sophisticated scent I have ever worn. Azure Night is truly a masterpiece that lasts all day."</p>
<span className="text-xs uppercase tracking-widest opacity-60">— Elena R.</span>
</div>
<div className="flex flex-col gap-6">
<div className="flex gap-1 text-[#CBCEEA]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-xl serif italic text-black leading-relaxed">"Packaging is as beautiful as the fragrance. It feels like opening a piece of art every single time."</p>
<span className="text-xs uppercase tracking-widest opacity-60">— Julian M.</span>
</div>
<div className="flex flex-col gap-6">
<div className="flex gap-1 text-[#CBCEEA]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-xl serif italic text-black leading-relaxed">"I've found my signature scent. LUXYPARFUM has a way of capturing emotions in a bottle."</p>
<span className="text-xs uppercase tracking-widest opacity-60">— Sophia K.</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-[#5D5D5A]/10 px-6" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
<h2 className="text-3xl tracking-tight text-black">Shop All</h2>
<div className="flex gap-4 p-1 bg-white border border-[#5D5D5A]/10 rounded-full">
<button className="px-6 py-2 text-xs uppercase tracking-widest rounded-full bg-black text-white">All</button>
<button className="px-6 py-2 text-xs uppercase tracking-widest rounded-full hover:bg-[#CBCEEA]/20 transition-colors">Men</button>
<button className="px-6 py-2 text-xs uppercase tracking-widest rounded-full hover:bg-[#CBCEEA]/20 transition-colors">Women</button>
<button className="px-6 py-2 text-xs uppercase tracking-widest rounded-full hover:bg-[#CBCEEA]/20 transition-colors">Unisex</button>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">

<div className="group">
<div className="aspect-[1/1] bg-[#CDEBF1]/30 p-12 mb-4">
<img alt="Scent" className="w-full h-full object-contain" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-sm font-medium text-black">Discovery Set</h4>
<p className="text-xs opacity-60">$45.00</p>
</div>
<div className="group">
<div className="aspect-[1/1] bg-[#F8E5E5]/30 p-12 mb-4">
<img alt="Scent" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<h4 className="text-sm font-medium text-black">Travel Spray</h4>
<p className="text-xs opacity-60">$35.00</p>
</div>
<div className="group">
<div className="aspect-[1/1] bg-[#DEF1D0]/30 p-12 mb-4">
<img alt="Scent" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h4 className="text-sm font-medium text-black">Body Oil</h4>
<p className="text-xs opacity-60">$85.00</p>
</div>
<div className="group">
<div className="aspect-[1/1] bg-[#CBCEEA]/30 p-12 mb-4">
<img alt="Scent" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h4 className="text-sm font-medium text-black">Home Diffuser</h4>
<p className="text-xs opacity-60">$110.00</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black text-white px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl tracking-tight mb-8 serif">Join the Private List</h2>
<p className="text-sm font-light opacity-60 mb-12 tracking-wide uppercase">Be the first to know about new fragrances and exclusive events.</p>
<form className="flex flex-col md:flex-row gap-4">
<input className="flex-1 bg-transparent border-b border-white/30 py-4 px-2 focus:border-white outline-none transition-colors font-light" placeholder="Your email address" type="email"/>
<button className="bg-white text-black px-12 py-4 text-xs uppercase tracking-widest hover:bg-[#CBCEEA] transition-colors">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-white pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
<div className="col-span-1 md:col-span-1">
<a className="text-3xl font-medium tracking-tighter text-black mb-8 block" href="#">LUXYPARFUM</a>
<p className="text-xs font-light leading-loose opacity-60 max-w-xs">
                        Elevating the senses through high-perfumery and minimalist design. Crafted in Grasse, designed in Paris.
                    </p>
</div>
<div>
<h5 className="text-xs uppercase tracking-[0.2em] font-medium text-black mb-8">Shop</h5>
<ul className="flex flex-col gap-4 text-xs font-light opacity-60">
<li><a className="hover:opacity-100 transition-opacity" href="#">All Fragrances</a></li>
<li><a className="hover:opacity-100 transition-opacity" href="#">Best Sellers</a></li>
<li><a className="hover:opacity-100 transition-opacity" href="#">Gift Sets</a></li>
<li><a className="hover:opacity-100 transition-opacity" href="#">Sample Program</a></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-[0.2em] font-medium text-black mb-8">Company</h5>
<ul className="flex flex-col gap-4 text-xs font-light opacity-60">
<li><a className="hover:opacity-100 transition-opacity" href="#">Our Story</a></li>
<li><a className="hover:opacity-100 transition-opacity" href="#">Sustainability</a></li>
<li><a className="hover:opacity-100 transition-opacity" href="#">Store Locator</a></li>
<li><a className="hover:opacity-100 transition-opacity" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-[0.2em] font-medium text-black mb-8">Follow</h5>
<div className="flex gap-6">
<a className="hover:text-[#CBCEEA] transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-[#CBCEEA] transition-colors" href="#"><iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon></a>
<a className="hover:text-[#CBCEEA] transition-colors" href="#"><iconify-icon icon="solar:mention-circle-linear" width="20"></iconify-icon></a>
</div>
<div className="mt-8">
<p className="text-xs font-light opacity-60">Customer Service</p>
<p className="text-sm font-medium mt-2">contact@luxyparfum.com</p>
</div>
</div>
</div>
<div className="pt-12 border-t border-[#5D5D5A]/5 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-[10px] uppercase tracking-widest opacity-40">© 2024 LUXYPARFUM. All Rights Reserved.</p>
<div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-40">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
