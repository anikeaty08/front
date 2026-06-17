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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // 1. Hero Animation on load
            setTimeout(() => {
                const hero = document.getElementById('hero-content');
                hero.classList.remove('opacity-0', 'translate-y-12');
                hero.classList.add('opacity-100', 'translate-y-0');
            }, 150);

            // 2. Scroll-triggered animations for sections
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-x-[-30px]', 'translate-x-[30px]');
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-section').forEach(section => {
                observer.observe(section);
            });

            // 3. Sticky Header transition
            const header = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.remove('py-6', 'text-white');
                    header.classList.add('py-4', 'bg-[#FAF7F2]/85', 'backdrop-blur-md', 'shadow-sm', 'text-[#2C1A0E]');
                } else {
                    header.classList.add('py-6', 'text-white');
                    header.classList.remove('py-4', 'bg-[#FAF7F2]/85', 'backdrop-blur-md', 'shadow-sm', 'text-[#2C1A0E]');
                }
            });
        });
    
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
      

<header className="fixed w-full top-0 z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center text-white" id="navbar">
<a className="font-serif text-xl tracking-tighter uppercase font-medium z-10 relative" href="#">Lumora</a>
<nav className="hidden md:flex gap-10 text-sm font-light z-10">
<a className="relative group py-1" href="#shop">
                Shop
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
</a>
<a className="relative group py-1" href="#about">
                About
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
</a>
<a className="relative group py-1" href="#contact">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
</a>
</nav>
<div className="flex items-center gap-5 z-10">
<button className="hover:opacity-70 transition-opacity">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hover:opacity-70 transition-opacity relative">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#C9927A] text-[#FAF7F2] text-xs w-4 h-4 flex items-center justify-center rounded-full font-medium" style={{fontSize: '0.65rem'}}>0</span>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1602874801007-bd458cb6c975?auto=format&amp'}}></div>

<div className="absolute inset-0 z-0 bg-[#2C1A0E]/40 mix-blend-multiply"></div>
<div className="relative z-10 text-center text-white px-6 opacity-0 translate-y-12 transition-all duration-[1500ms] ease-out flex flex-col items-center" id="hero-content">
<span className="text-xs font-medium tracking-[0.2em] uppercase mb-6 text-[#E8DDD0]">The Artisan Collection</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium mb-8 drop-shadow-sm">Light the Moment</h1>
<p className="text-base md:text-lg font-light mb-12 max-w-md mx-auto text-[#FAF7F2]/90 leading-relaxed">
                Hand-poured luxury fragrances designed to elevate your everyday spaces into sanctuaries of calm.
            </p>
<a className="group inline-flex items-center gap-3 bg-[#FAF7F2] text-[#2C1A0E] px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#E8DDD0] hover:text-[#2C1A0E] transition-all duration-300" href="#shop">
                Explore Collection
                <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#FAF7F2]" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="max-w-xl">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium mb-4">Signature Scents</h2>
<p className="text-sm font-light text-[#2C1A0E]/70 leading-relaxed">Meticulously crafted with essential oils and sustainable botanical wax for a clean, lingering burn.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-[#C9927A] transition-colors pb-1 border-b border-transparent hover:border-[#C9927A]" href="#">
                    View all candles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<a className="group block fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out" href="#">
<div className="relative aspect-[4/5] mb-6 overflow-hidden bg-[#E8DDD0] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(44,26,14,0.12)]">
<img alt="Midnight Amber Candle" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg tracking-tight font-medium text-[#2C1A0E] group-hover:text-[#C9927A] transition-colors duration-300">Midnight Amber</h3>
<p className="text-xs font-light text-[#2C1A0E]/60 mt-1">Sandalwood, Vanilla, Smoke</p>
</div>
<span className="text-sm font-medium">$48</span>
</div>
</a>

<a className="group block fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out" href="#">
<div className="relative aspect-[4/5] mb-6 overflow-hidden bg-[#E8DDD0] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(44,26,14,0.12)]">
<img alt="Velvet Rose Candle" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-[#FAF7F2] text-[#2C1A0E] text-xs px-3 py-1 font-medium tracking-wide">Bestseller</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg tracking-tight font-medium text-[#2C1A0E] group-hover:text-[#C9927A] transition-colors duration-300">Velvet Rose</h3>
<p className="text-xs font-light text-[#2C1A0E]/60 mt-1">Damask Rose, Oud, Clove</p>
</div>
<span className="text-sm font-medium">$48</span>
</div>
</a>

<a className="group block fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out" href="#">
<div className="relative aspect-[4/5] mb-6 overflow-hidden bg-[#E8DDD0] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(44,26,14,0.12)]">
<img alt="Morning Linen Candle" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg tracking-tight font-medium text-[#2C1A0E] group-hover:text-[#C9927A] transition-colors duration-300">Morning Linen</h3>
<p className="text-xs font-light text-[#2C1A0E]/60 mt-1">White Tea, Bergamot, Musk</p>
</div>
<span className="text-sm font-medium">$42</span>
</div>
</a>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#C9927A] transition-colors pb-1 border-b border-[#2C1A0E]/20 hover:border-[#C9927A]" href="#">
                    View all candles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#E8DDD0] overflow-hidden" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 md:order-1 relative fade-in-section opacity-0 translate-x-[-30px] transition-all duration-1000 ease-out">
<div className="absolute -inset-4 bg-[#FAF7F2] opacity-50 z-0 hidden md:block"></div>
<img alt="Pouring wax in studio" className="w-full aspect-[4/5] object-cover relative z-10 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="order-1 md:order-2 fade-in-section opacity-0 translate-x-[30px] transition-all duration-1000 ease-out">
<span className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block text-[#C9927A]">Our Philosophy</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium mb-8">The Art of Stillness</h2>
<div className="space-y-6 text-sm font-light text-[#2C1A0E]/80 leading-relaxed">
<p>Founded in a sunlit studio, Lumora was born from a desire to capture fleeting moments of peace in an accelerating world. We believe a scent is more than just a fragrance; it is an atmosphere, a deeply personal memory, a gentle return to oneself.</p>
<p>Every vessel is meticulously hand-poured in small batches using ethically sourced ingredients. We pair custom-blended perfumes with unbleached cotton wicks to ensure a clean, luminous burn that subtly transforms the energy of your home.</p>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-3 text-sm font-medium group" href="#">
<span className="pb-1 border-b border-[#2C1A0E]/30 group-hover:border-[#C9927A] group-hover:text-[#C9927A] transition-colors">Read our full story</span>
<iconify-icon className="group-hover:text-[#C9927A] transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#FAF7F2]">
<div className="max-w-4xl mx-auto text-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<iconify-icon className="text-4xl text-[#C9927A]/40 mb-8" icon="solar:quote-left-linear"></iconify-icon>

<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-8 cursor-grab active:cursor-grabbing">
<div className="snap-center shrink-0 w-full flex flex-col items-center justify-center">
<p className="font-serif text-2xl md:text-3xl font-medium leading-normal mb-8 text-[#2C1A0E]">"The Midnight Amber candle completely transformed my evening routine. It feels like a warm, luxurious hug after a long day. The scent lingers beautifully even after it's extinguished."</p>
<span className="text-xs font-medium tracking-widest uppercase text-[#2C1A0E]/60">— Sarah Jenkins</span>
</div>

</div>
<div className="flex justify-center gap-2 mt-4">
<div className="w-2 h-2 rounded-full bg-[#2C1A0E]"></div>
<div className="w-2 h-2 rounded-full bg-[#2C1A0E]/20"></div>
<div className="w-2 h-2 rounded-full bg-[#2C1A0E]/20"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#2C1A0E] text-[#FAF7F2] text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl aspect-square bg-[#C9927A]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium mb-4">Join the Inner Circle</h2>
<p className="text-sm font-light text-[#FAF7F2]/70 mb-10 max-w-md mx-auto">Subscribe for early access to new seasonal collections, private sales, and rituals for intentional living.</p>
<form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto group">
<input className="flex-1 bg-transparent border-b border-[#FAF7F2]/30 px-2 py-3 text-sm focus:outline-none focus:border-[#C9927A] transition-colors rounded-none placeholder:text-[#FAF7F2]/40 text-[#FAF7F2]" placeholder="Enter your email address" required="" type="email"/>
<button className="sm:border-b border-[#FAF7F2]/30 sm:group-focus-within:border-[#C9927A] px-4 py-3 text-sm font-medium hover:text-[#C9927A] transition-colors mt-4 sm:mt-0 uppercase tracking-wider text-left sm:text-center" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-[#FAF7F2] pt-24 pb-12 px-6 md:px-12 border-t border-[#E8DDD0]/50" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">

<div className="md:col-span-4 lg:col-span-5">
<a className="font-serif text-2xl tracking-tighter uppercase font-medium block mb-6" href="#">Lumora</a>
<p className="text-sm font-light text-[#2C1A0E]/70 max-w-xs leading-relaxed">Elevating spaces through the art of scent and stillness. Hand-poured in Los Angeles.</p>
<div className="flex gap-4 mt-8">
<a className="text-[#2C1A0E]/60 hover:text-[#C9927A] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-[#2C1A0E]/60 hover:text-[#C9927A] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:pin-linear"></iconify-icon></a>
<a className="text-[#2C1A0E]/60 hover:text-[#C9927A] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div className="md:col-span-4 lg:col-span-4 grid grid-cols-2 gap-8">
<div>
<h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-[#2C1A0E]">Shop</h4>
<ul className="space-y-4 text-sm font-light text-[#2C1A0E]/70">
<li><a className="hover:text-[#C9927A] transition-colors" href="#">All Candles</a></li>
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Diffusers</a></li>
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-[#2C1A0E]">About</h4>
<ul className="space-y-4 text-sm font-light text-[#2C1A0E]/70">
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Ingredients</a></li>
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="md:col-span-4 lg:col-span-3">
<h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-[#2C1A0E]">Support</h4>
<ul className="space-y-4 text-sm font-light text-[#2C1A0E]/70">
<li><a className="hover:text-[#C9927A] transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Candle Care</a></li>
<li><a className="hover:text-[#C9927A] transition-colors" href="#">Wholesale</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#E8DDD0]/50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-light text-[#2C1A0E]/50">© 2024 Lumora Fragrances. All rights reserved.</p>
<div className="flex gap-6 text-xs font-light text-[#2C1A0E]/50">
<a className="hover:text-[#2C1A0E] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#2C1A0E] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
