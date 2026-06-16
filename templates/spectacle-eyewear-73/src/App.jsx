import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
black: '#0a0a0a', // Slightly lighter black for linear vibe
white: '#FFFFFF',
burgundy: '#4A1E2C',
gold: '#D4AF37',
offwhite: '#F9F9F9',
gray: '#888888'
}
},
fontFamily: {
sans: ['Figtree', 'sans-serif'],
serif: ['Instrument Serif', 'serif'], // Swapping to Instrument Serif for elegant headings
},
letterSpacing: {
widest: '0.2em',
tight: '-0.02em',
tighter: '-0.04em',
},
fontSize: {
'xxs': '0.625rem',
}
}
}
}



      lucide.createIcons();

      // Scroll Background logic for Header
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              header.classList.add('bg-brand-white', 'text-brand-black', 'shadow-sm');
              header.classList.remove('bg-transparent', 'text-brand-white');
          } else {
              header.classList.remove('bg-brand-white', 'text-brand-black', 'shadow-sm');
              header.classList.add('bg-transparent', 'text-brand-white');
          }
      });

      // Simple Intersection Observer for Fade In elements
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    


      function switchView(viewId) {
          const productView = document.getElementById('product-view');
          const landingSections = document.querySelectorAll('main > section');

          if (viewId === 'product') {
              landingSections.forEach(el => el.classList.add('hidden'));
              productView.classList.remove('hidden');
              window.scrollTo(0,0);
              // Re-trigger animations
              setTimeout(() => {
                  productView.querySelectorAll('.fade-in-up').forEach(el => {
                     el.classList.remove('visible');
                     void el.offsetWidth; // trigger reflow
                     el.classList.add('visible');
                  });
              }, 50);
          } else {
              landingSections.forEach(el => el.classList.remove('hidden'));
              productView.classList.add('hidden');
              window.scrollTo(0,0);
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-brand-black text-brand-white py-3 relative z-50">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs uppercase tracking-widest font-medium">
          Complimentary worldwide shipping on all bespoke orders
          <a className="ml-2 underline decoration-brand-gold decoration-1 underline-offset-4 font-semibold hover:text-brand-gold transition-colors" href="#collection" onclick="switchView('product'); return false;">
            Shop Now
          </a>
</p>
</div>
</div>

<header className="fixed top-0 w-full z-40 transition-all duration-500 bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-black group" id="header">
<div className="absolute inset-0 bg-brand-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-gray-100"></div>
<div className="flex h-24 max-w-[2000px] mx-auto px-6 relative items-center justify-between">

<div className="flex-1 flex items-center justify-start">
<button className="p-2 -ml-2 lg:hidden">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<nav className="hidden lg:flex gap-8 text-xs font-semibold uppercase tracking-widest">
<a className="hover:text-brand-burgundy transition-colors" href="#story">
              The Story
            </a>
<a className="hover:text-brand-burgundy transition-colors" href="#collection" onclick="switchView('product'); return false;">
              Optical
            </a>
<a className="hover:text-brand-burgundy transition-colors" href="#collection">
              Sun
            </a>
</nav>
</div>

<div className="flex-shrink-0 flex justify-center items-center cursor-pointer z-10" onclick="switchView('landing')">
<div className="flex flex-col items-center">
<span className="text-2xl font-bold tracking-tight uppercase leading-none">
              Lombia.
            </span>
<span className="text-[0.5rem] uppercase tracking-[0.3em] mt-1 font-medium">
              Bespoke Eyewear
            </span>
</div>
</div>

<div className="flex-1 flex items-center justify-end gap-6">
<a className="hidden lg:block text-xs font-semibold uppercase tracking-widest hover:text-brand-burgundy transition-colors" href="#">
            Account
          </a>
<button className="hidden lg:block hover:text-brand-burgundy transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<button className="flex items-center gap-2 hover:text-brand-burgundy transition-colors">
<span className="hidden lg:block text-xs font-semibold uppercase tracking-widest">
              Cart
            </span>
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="text-xs font-semibold">(0)</span>
</button>
</div>
</div>
</header>
<main className="">

<section className="relative h-screen w-full overflow-hidden bg-gray-900 text-white">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/30 z-10"></div>

<img alt="Lombia Bespoke Eyewear Hero" className="w-full h-full object-cover object-center animate-slow-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="flex flex-col text-center z-20 px-6 pb-24 absolute top-0 right-0 bottom-0 left-0 items-center justify-end">
<div className="fade-in-up max-w-4xl mx-auto">
<p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-brand-gold">
              The Finish Line Colorway
            </p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 leading-none">
              Akuyona
              <span className="italic font-serif font-medium text-white/90">
                Eyokuqala
              </span>
</h1>
<div className="flex gap-4 justify-center">
<a className="bg-white text-brand-black px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-brand-burgundy hover:text-white transition-colors duration-300 min-w-[160px] backdrop-blur-sm bg-white/90" href="#collection" onclick="switchView('product'); return false;">
                Explore Collection
              </a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
<i className="w-6 h-6 text-white/70" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</section>

<section className="bg-brand-black text-white" id="story">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-12 lg:p-24 flex items-center border-r border-white/5">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight fade-in-up">
              LIMITED-EDITION COLLECTIBLE EYEWEAR INSPIRED BY
              <span className="italic text-brand-gold font-serif font-light">
                ANCESTRAL ROOTS
              </span>
              , CRAFTED TO TRANSCEND GENERATIONS.
            </h2>
</div>

<div className="p-12 lg:p-24 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
<div className="fade-in-up">
<p className="text-xs font-semibold uppercase tracking-widest mb-6 text-gray-500">
                Unmatched Quality &amp; Precision
              </p>
<div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
<p>
                  Lombia galvanizes its heritage by studying the most exotic
                  narratives and ennobling features produced by the world's best
                  craftsmanship.
                </p>
<p>
                  Each limited edition spectacle undergoes 250 steps to come to
                  life. Handcrafted in Japan, our eyewear collections exude
                  exclusivity.
                </p>
<p className="text-white font-medium">
                  Limited production of 199 pieces or fewer per colorway.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-white py-24 border-b border-gray-100" id="collection">
<div className="max-w-[2000px] mx-auto px-6 mb-12 flex justify-between items-end">
<h3 className="text-3xl font-semibold tracking-tight">
            The
            <span className="italic font-serif text-brand-burgundy font-light">
              Collection
            </span>
</h3>
<div className="flex gap-2">
<button className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-colors hover:border-black">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-colors hover:border-black">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-px bg-gray-100 pb-4">

<div className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[25vw] bg-white group cursor-pointer relative zoom-container">
<div className="aspect-[4/5] overflow-hidden bg-gray-50 relative">
<span className="absolute top-4 left-4 z-10 text-[10px] font-semibold uppercase tracking-widest bg-brand-burgundy text-white px-2 py-1">
                New Arrival
              </span>
<img alt="Glasses" className="w-full h-full object-cover transition-transform duration-700 mix-blend-multiply" src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 text-center">
<h4 className="text-lg font-semibold mb-1">Futhi Elite</h4>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                Acetate Styles
              </p>
<p className="text-sm font-medium">€450.00</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[25vw] bg-white group cursor-pointer relative zoom-container">
<div className="aspect-[4/5] overflow-hidden bg-gray-50">
<img alt="Glasses" className="w-full h-full object-cover transition-transform duration-700 mix-blend-multiply" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 text-center">
<h4 className="text-lg font-semibold mb-1">Midnight Gold</h4>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                Titanium Series
              </p>
<p className="text-sm font-medium">€520.00</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[25vw] bg-white group cursor-pointer relative zoom-container">
<div className="aspect-[4/5] overflow-hidden bg-gray-50">
<img alt="Glasses" className="w-full h-full object-cover transition-transform duration-700 mix-blend-multiply" src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 text-center">
<h4 className="text-lg font-semibold mb-1">Sky Aviator</h4>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                Rimless Styles
              </p>
<p className="text-sm font-medium">€480.00</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[25vw] bg-white group cursor-pointer relative zoom-container">
<div className="aspect-[4/5] overflow-hidden bg-gray-50 relative">
<span className="absolute top-4 left-4 z-10 text-[10px] font-semibold uppercase tracking-widest bg-gray-200 text-black px-2 py-1">
                Sold Out
              </span>
<img alt="Glasses" className="w-full h-full object-cover transition-transform duration-700 mix-blend-multiply opacity-75 grayscale" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 text-center">
<h4 className="text-lg font-semibold mb-1">Akuyona Bold</h4>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                Combination
              </p>
<p className="text-sm font-medium">€495.00</p>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden bg-black">
<div className="absolute inset-0">
<img alt="Detail" className="w-full h-full object-cover opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 z-10 flex flex-col justify-end items-start p-12 lg:p-24">
<div className="max-w-xl fade-in-up">
<p className="text-white text-lg md:text-xl font-light leading-relaxed mb-8">
              Offering unquestionable exclusivity, with a limited serialized
              production of only 199 pieces or less per colorway and style.

              <span className="italic font-serif text-brand-gold">
                Once they are gone, they are gone forever.
              </span>
</p>
<a className="inline-block text-white border-b border-white pb-1 text-xs font-semibold uppercase tracking-widest hover:text-brand-gold hover:border-brand-gold transition-colors" href="#collection">
              Discover The Collection
            </a>
</div>
</div>
</section>

<section className="bg-brand-burgundy text-white py-24 text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
            PERPETUAL
            <span className="italic font-serif text-brand-gold font-light">DESIGN</span>
</h2>
<div className="flex justify-center">
<a className="border border-white/30 bg-transparent px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-brand-burgundy transition-all duration-300 backdrop-blur-sm" href="#collection">
              Shop All Sunglasses
            </a>
</div>
</div>
</section>

<div className="hidden pt-32 pb-24 px-6 max-w-[2000px] mx-auto min-h-screen bg-brand-white" id="product-view">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-in-up">
<p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-4">
              The Finish Line Colorway
            </p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight uppercase text-brand-black">
              New Releases
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">

<div className="group cursor-pointer fade-in-up">
<div className="aspect-[4/5] bg-gray-50 relative overflow-hidden mb-6">
<img alt="Valour Rainforest" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://thenri.com/cdn/shop/files/Valour_THENRI_Rainforest_Green_Designer_Sunglasses_Ecommerce_021.jpg?v=1733342823&amp;width=800"/>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold uppercase tracking-tight mb-1">
                  Valour
                </h3>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Rainforest Green
                </p>
<p className="text-sm font-medium">€1,026.95</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up">
<div className="aspect-[4/5] bg-gray-50 relative overflow-hidden mb-6">
<img alt="GTO Traverse" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://thenri.com/cdn/shop/files/GTO_THENRI_TraverseBlackMatte_Designer_Sunglasses_Ecommerce_419.jpg?v=1731342373&amp;width=800"/>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold uppercase tracking-tight mb-1">
                  GTO
                </h3>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Traverse Matte Black
                </p>
<p className="text-sm font-medium">€1,512.95</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up">
<div className="aspect-[4/5] bg-gray-50 relative overflow-hidden mb-6">
<img alt="Tuatara Deep Blue" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://thenri.com/cdn/shop/files/Tuatara_THENRI_DeepBlue_Blue_Designer_Sunglasses_Ecommerce_574.jpg?v=1733342919&amp;width=800"/>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold uppercase tracking-tight mb-1">
                  Tuatara
                </h3>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Deep Blue
                </p>
<p className="text-sm font-medium">€1,026.95</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up">
<div className="aspect-[4/5] bg-gray-50 relative overflow-hidden mb-6">
<img alt="Taycan Sabre" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://thenri.com/cdn/shop/files/TAYCAN_THENRI_Sabre_GRAY_Designer_Sunglasses_Front_025_1.jpg?v=1724094628&amp;width=800"/>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold uppercase tracking-tight mb-1">
                  Taycan
                </h3>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Sabre Grey
                </p>
<p className="text-sm font-medium">€1,026.95</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up">
<div className="aspect-[4/5] bg-gray-50 relative overflow-hidden mb-6">
<span className="absolute top-4 left-4 z-10 text-[10px] font-semibold uppercase tracking-widest bg-brand-burgundy text-white px-2 py-1">
                  Limited
                </span>
<img alt="Valour Oxblood" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://thenri.com/cdn/shop/files/Valour_THENRI_Oxblood_RED_Designer_Sunglasses_Ecommerce_069.jpg?v=1733342941&amp;width=800"/>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold uppercase tracking-tight mb-1">
                  Valour
                </h3>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Oxblood Red
                </p>
<p className="text-sm font-medium">€1,026.95</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up">
<div className="aspect-[4/5] bg-gray-50 relative overflow-hidden mb-6">
<img alt="GTO Trefoil" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://thenri.com/cdn/shop/files/GTO_THENRI_Green_Designer_Sunglasses_3.jpg?v=1731342324&amp;width=800"/>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold uppercase tracking-tight mb-1">
                  GTO
                </h3>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Trefoil Green
                </p>
<p className="text-sm font-medium">€1,512.95</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up">
<div className="aspect-[4/5] bg-gray-50 relative overflow-hidden mb-6">
<img alt="Tuatara Shadow" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://thenri.com/cdn/shop/files/Tuatara_THENRI_ShadowII_Black_Designer_Sunglasses_Ecommerce_011.jpg?v=1733342913&amp;width=800"/>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold uppercase tracking-tight mb-1">
                  Tuatara
                </h3>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Shadow II
                </p>
<p className="text-sm font-medium">€1,026.95</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up">
<div className="aspect-[4/5] bg-gray-50 relative overflow-hidden mb-6">
<img alt="Taycan Patina" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://thenri.com/cdn/shop/files/TAYCAN_THENRI_Patina_BROWN_Designer_Sunglasses_Front_028_1.jpg?v=1724094578&amp;width=800"/>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold uppercase tracking-tight mb-1">
                  Taycan
                </h3>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Patina Brown
                </p>
<p className="text-sm font-medium">€1,026.95</p>
</div>
</div>
</div>
<div className="mt-32 text-center">
<button className="border-b border-brand-black pb-1 text-xs font-semibold uppercase tracking-widest hover:text-brand-burgundy transition-colors" onclick="switchView('landing')">
              Back to Home
            </button>
</div>
</div>
</div>
</main>

<footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

<div className="lg:col-span-4 pr-12">
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-brand-gold">
              A Private Privilege
            </h4>
<p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Join our curated list to gain exclusive access to secret product
              releases, exclusive events, and more.
            </p>
<form className="flex border-b border-white/20 pb-2">
<input className="bg-transparent w-full text-sm outline-none placeholder-gray-600 focus:placeholder-gray-400" placeholder="Email Address" type="email"/>
<button className="text-white hover:text-brand-gold transition-colors" type="submit">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>

<div className="hidden lg:block lg:col-span-1"></div>

<div className="lg:col-span-3">
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">
              Collections
            </h4>
<ul className="space-y-4 text-sm text-gray-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  New Releases
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Maison Galactique
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Acetate Styles
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Titanium Styles
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Rimless Styles
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">
              Legal
            </h4>
<ul className="space-y-4 text-sm text-gray-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Shipping &amp; Returns
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Warranty
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">
              Connect
            </h4>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-gray-400 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-gray-400 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600">
<div className="flex items-center gap-6 mb-4 md:mb-0">
<span>© LOMBIA 2025</span>
<span>Johannesburg, South Africa</span>
</div>
<div className="flex items-center gap-2">
<span>Powered by Lombia</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
