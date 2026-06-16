import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Reveal animation on scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Smooth scroll for anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-[5%] py-6 backdrop-blur-md bg-black/10">
<div className="flex-1 hidden lg:flex gap-8 text-xs uppercase tracking-widest font-light">
<a className="hover:text-neutral-400 transition-colors" href="#">Shop</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Lookbook</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Archive</a>
</div>
<div className="flex-1 text-center">
<a className="text-xl tracking-[0.3em] font-semibold" href="#">VELLMORE</a>
</div>
<div className="flex-1 flex justify-end gap-6 items-center">
<button className="hover:opacity-70 transition-opacity"><iconify-icon icon="solar:magnifer-linear" style={{fontSize: '1.25rem'}}></iconify-icon></button>
<button className="hover:opacity-70 transition-opacity relative">
<iconify-icon icon="solar:bag-heart-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="absolute -top-1 -right-1 bg-white text-black text-[0.5rem] w-3 h-3 rounded-full flex items-center justify-center font-bold">0</span>
</button>
<button className="lg:hidden hover:opacity-70 transition-opacity"><iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.25rem'}}></iconify-icon></button>
</div>
</nav>

<section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/40 z-10"></div>
<img alt="Hero Model" className="w-full h-full object-cover scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=2040&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 text-center px-4 max-w-4xl">
<h1 className="text-7xl md:text-[8rem] font-semibold tracking-tighter mb-4 opacity-0 animate-[fadeInUp_1.5s_ease-out_forwards]">VELLMORE</h1>
<p className="text-sm md:text-base uppercase tracking-[0.4em] font-light mb-10 opacity-0 animate-[fadeInUp_1.5s_ease-out_0.5s_forwards]">Defined by Minimalism. Designed for Impact.</p>
<div className="flex flex-col md:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_1.5s_ease-out_1s_forwards]">
<a className="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors" href="#collection">Shop Collection</a>
<a className="px-10 py-4 border border-white/30 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors" href="#">Explore Lookbook</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
<iconify-icon icon="solar:arrow-down-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
</section>

<section className="py-24 px-[5%]" id="collection">
<div className="flex justify-between items-end mb-16 reveal">
<div>
<h2 className="text-3xl font-semibold tracking-tight uppercase">New Arrivals</h2>
<p className="text-neutral-500 text-sm mt-2 font-light">Spring/Summer 2024 Collection</p>
</div>
<a className="text-xs uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

<div className="product-card group cursor-pointer reveal">
<div className="relative overflow-hidden aspect-[3/4] bg-neutral-900">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="product-overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity flex items-end p-6">
<button className="w-full py-3 bg-white text-black text-[0.6rem] uppercase tracking-tighter font-semibold">Quick Add +</button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium uppercase tracking-tight">Essential Boxy Tee</h3>
<p className="text-xs text-neutral-500 mt-1 uppercase">Charcoal</p>
</div>
<p className="text-sm font-light">$85</p>
</div>
</div>

<div className="product-card group cursor-pointer reveal" style={{transitionDelay: '100ms'}}>
<div className="relative overflow-hidden aspect-[3/4] bg-neutral-900">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="product-overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity flex items-end p-6">
<button className="w-full py-3 bg-white text-black text-[0.6rem] uppercase tracking-tighter font-semibold">Quick Add +</button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium uppercase tracking-tight">Heavyweight Hoodie</h3>
<p className="text-xs text-neutral-500 mt-1 uppercase">Off-White</p>
</div>
<p className="text-sm font-light">$165</p>
</div>
</div>

<div className="product-card group cursor-pointer reveal" style={{transitionDelay: '200ms'}}>
<div className="relative overflow-hidden aspect-[3/4] bg-neutral-900">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="product-overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity flex items-end p-6">
<button className="w-full py-3 bg-white text-black text-[0.6rem] uppercase tracking-tighter font-semibold">Quick Add +</button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium uppercase tracking-tight">Structured Bomber</h3>
<p className="text-xs text-neutral-500 mt-1 uppercase">Midnight Black</p>
</div>
<p className="text-sm font-light">$290</p>
</div>
</div>

<div className="product-card group cursor-pointer reveal" style={{transitionDelay: '300ms'}}>
<div className="relative overflow-hidden aspect-[3/4] bg-neutral-900">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="product-overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity flex items-end p-6">
<button className="w-full py-3 bg-white text-black text-[0.6rem] uppercase tracking-tighter font-semibold">Quick Add +</button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium uppercase tracking-tight">Tailored Tech Pant</h3>
<p className="text-xs text-neutral-500 mt-1 uppercase">Shadow</p>
</div>
<p className="text-sm font-light">$140</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a]">
<div className="px-[5%] grid grid-cols-12 gap-6 items-center">
<div className="col-span-12 lg:col-span-5 reveal">
<span className="text-[0.6rem] uppercase tracking-[0.5em] text-neutral-500 block mb-6">Visual Storytelling</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-8">THE ART OF <br/>RESTRICTION</h2>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-10 font-light">
                    Our Spring lookbook explores the relationship between architectural silhouettes and the fluidity of urban movement.
                </p>
<a className="group flex items-center gap-4 text-xs uppercase tracking-widest font-semibold" href="#">
                    Explore Archive
                    <iconify-icon className="group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
<div className="mt-20 reveal" style={{transitionDelay: '200ms'}}>
<img alt="Lookbook 1" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="reveal" style={{transitionDelay: '400ms'}}>
<img alt="Lookbook 2" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-[5%] text-center flex flex-col items-center">
<div className="max-w-3xl reveal">
<iconify-icon className="text-neutral-700 mb-8" icon="solar:medal-star-linear" style={{fontSize: '2rem'}}></iconify-icon>
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-snug mb-8">
                VELLMORE REPRESENTS MODERN IDENTITY THROUGH MINIMAL FASHION. EVERY PIECE IS DESIGNED TO MERGE COMFORT, CONFIDENCE, AND TIMELESS STREETWEAR AESTHETICS.
            </h2>
<div className="w-12 h-px bg-neutral-700 mx-auto"></div>
</div>
</section>

<section className="pb-24 px-[5%]">
<div className="text-center mb-12 reveal">
<p className="text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">Curated by the Community</p>
<h3 className="text-sm font-semibold mt-2">@VELLMORE_OFFICIAL</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
<div className="aspect-square bg-neutral-900 overflow-hidden reveal"><img alt="Insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-neutral-900 overflow-hidden reveal" style={{transitionDelay: '100ms'}}><img alt="Insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/></div>
<div className="aspect-square bg-neutral-900 overflow-hidden reveal" style={{transitionDelay: '200ms'}}><img alt="Insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-neutral-900 overflow-hidden reveal" style={{transitionDelay: '300ms'}}><img alt="Insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-neutral-900 overflow-hidden reveal" style={{transitionDelay: '400ms'}}><img alt="Insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-neutral-900 overflow-hidden reveal" style={{transitionDelay: '500ms'}}><img alt="Insta" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&amp;w=2022&amp;auto=format&amp;fit=crop"/></div>
</div>
</section>

<section className="py-32 bg-white text-black">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">JOIN THE COMMUNITY</h2>
<p className="text-sm text-neutral-500 mb-10 font-light">Be the first to know about secret drops and seasonal archives.</p>
<form className="flex flex-col md:flex-row gap-0 border-b border-black">
<input className="flex-1 bg-transparent py-4 text-xs tracking-widest outline-none placeholder:text-neutral-400 uppercase" placeholder="ENTER YOUR EMAIL" type="email"/>
<button className="py-4 px-8 text-xs font-semibold tracking-widest hover:text-neutral-500 transition-colors uppercase">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-black py-20 px-[5%] text-neutral-400">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-xl tracking-[0.3em] font-semibold text-white mb-8 block" href="#">VELLMORE</a>
<p className="text-xs leading-loose font-light max-w-xs">
                    Premium minimalist streetwear designed for the modern individual. Merging silhouettes with architectural intent.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6">Collections</h4>
<ul className="text-xs space-y-4 font-light uppercase tracking-tighter">
<li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tees &amp; Tops</a></li>
<li><a className="hover:text-white transition-colors" href="#">Outerwear</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6">Support</h4>
<ul className="text-xs space-y-4 font-light uppercase tracking-tighter">
<li><a className="hover:text-white transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6">Social</h4>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:play-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" style={{fontSize: '1.5rem'}}></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" style={{fontSize: '1.5rem'}}></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[0.6rem] uppercase tracking-widest font-light">© 2024 VELLMORE Studio. All rights reserved.</p>
<p className="text-[0.6rem] uppercase tracking-widest font-light">Designed for the minimalists.</p>
</div>
</footer>

<style>
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>

    </>
  );
}
