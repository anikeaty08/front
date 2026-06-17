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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 w-full border-b border-[#3E2723]/5 bg-[#FDFCF8]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-3xl text-[#8D6E63]" icon="solar:shop-2-linear"></iconify-icon>
<span className="text-2xl font-normal tracking-tight text-[#3E2723] serif mt-1">Vietnamese Takeout</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-light text-[#5D4037]">
<a className="hover:text-[#3E2723] transition-colors" href="#">Menu</a>
<a className="hover:text-[#3E2723] transition-colors" href="#">Reviews</a>
<a className="hover:text-[#3E2723] transition-colors" href="#">Info</a>
</div>
<button className="hidden md:flex items-center gap-2 bg-[#3E2723] text-[#FDFCF8] px-5 py-2.5 rounded-full text-lg font-normal hover:bg-[#5D4037] transition-all shadow-sm hover:shadow-md">
<span className="">Order Online</span>
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
</button>
<button className="md:hidden text-[#3E2723]">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="pt-24 pb-8 px-6 max-w-7xl mx-auto text-center">
<p className="text-[#8D6E63] uppercase tracking-widest text-xs font-normal mb-4">Vietnamese Takeout | Prahran</p>
<h1 className="text-6xl md:text-8xl font-normal tracking-tight text-[#3E2723] mb-6 serif">Fast, Fresh &amp; Healthy</h1>
<p className="text-xl md:text-2xl text-[#5D4037] font-light max-w-2xl mx-auto leading-relaxed">
            Order your delicious Vietnam Cuisine online. Authentic street food brought directly to your neighborhood.
        </p>
<div className="flex flex-wrap justify-center gap-4 mt-10 mb-6">
<div className="flex items-center gap-2 px-5 py-2 bg-[#3E2723]/5 rounded-full">
<iconify-icon className="text-xl text-[#8D6E63]" icon="solar:bag-3-linear"></iconify-icon>
<span className="text-base font-normal text-[#5D4037]">Pickup</span>
</div>
<div className="flex items-center gap-2 px-5 py-2 bg-[#3E2723]/5 rounded-full">
<iconify-icon className="text-xl text-[#8D6E63]" icon="solar:shop-linear"></iconify-icon>
<span className="text-base font-normal text-[#5D4037]">Dine-In</span>
</div>
<div className="flex items-center gap-2 px-5 py-2 bg-[#3E2723]/5 rounded-full">
<iconify-icon className="text-xl text-[#8D6E63]" icon="solar:laptop-linear"></iconify-icon>
<span className="text-base font-normal text-[#5D4037]">Order Online</span>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-6 mb-12">
<div className="flex gap-3 overflow-x-auto hide-scrollbar pb-4 border-b border-[#3E2723]/5">
<button className="px-5 py-2 rounded-full bg-[#3E2723] text-[#FDFCF8] text-sm font-normal whitespace-nowrap">Online Menu</button>
</div>
</div>

<main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">

<div className="flex flex-col gap-16">

<section className="">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-4xl font-normal tracking-tight text-[#3E2723] serif">Banh Mi</h2>
<div className="h-px bg-[#3E2723]/10 flex-grow"></div>
</div>
<div className="space-y-10">
<div className="group flex gap-5 items-start">
<img alt="Classic Pork Banh Mi" className="shrink-0 bg-[#3E2723]/5 w-24 h-24 object-cover rounded-2xl shadow-sm" src="https://www.recipetineats.com/tachyon/2024/03/Crispy-pork-belly-banh-mi_3.jpg"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Classic Pork Banh Mi</h3>
<span className="text-lg font-normal text-[#5D4037]">$12.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Crispy roast pork, homemade pate, mayo, pickled carrots, cucumber, fresh chili and coriander.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Lemongrass Chicken Banh Mi" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lcbn4FDtdYywJSIUlgAzyXbm0YPH1rqQBQ&amp;s"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Lemongrass Chicken Banh Mi</h3>
<span className="text-lg font-normal text-[#5D4037]">$12.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Grilled chicken marinated in lemongrass, served with our signature soy dressing and fresh salad.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Crispy Tofu Banh Mi" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://publish.purewow.net/wp-content/uploads/sites/2/2020/03/tofu-banh-mi-recipe-600.jpg"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Crispy Tofu Banh Mi</h3>
<span className="text-lg font-normal text-[#5D4037]">$11.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Fried tofu puffs, vegan mayo, soy sauce, pickled radish, fresh coriander, and chili.</p>
</div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-4xl font-normal tracking-tight text-[#3E2723] serif">Entrees</h2>
<div className="h-px bg-[#3E2723]/10 flex-grow"></div>
</div>
<div className="space-y-10">
<div className="group flex gap-5 items-start">
<img alt="Pork Spring Rolls" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZUZ06ozaBHvNn7fT6JA_hBaFA3LEh8oSxg&amp;s"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Pork Spring Rolls (4pcs)</h3>
<span className="text-lg font-normal text-[#5D4037]">$8.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Crispy fried traditional pork and taro spring rolls served with sweet chilli sauce.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Prawn Rice Paper Rolls" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Prawn Rice Paper Rolls (2pcs)</h3>
<span className="text-lg font-normal text-[#5D4037]">$9.00</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Fresh prawns, vermicelli, mint, and lettuce wrapped in rice paper. Served with hoisin peanut dip.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Chicken Satay Skewers" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Chicken Satay Skewers (3pcs)</h3>
<span className="text-lg font-normal text-[#5D4037]">$9.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Grilled marinated chicken skewers topped with rich, creamy peanut sauce and crushed nuts.</p>
</div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-4xl font-normal tracking-tight text-[#3E2723] serif">Main Courses</h2>
<div className="h-px bg-[#3E2723]/10 flex-grow"></div>
</div>
<div className="space-y-10">
<div className="group flex gap-5 items-start">
<img alt="Bun Cha" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://cdn.shopify.com/s/files/1/0725/3911/1726/files/20250617054400-andy-20cooks-20-20pork-20veg-20and-20noodles-20recipe.jpg?v=1750139042&amp;width=1000&amp;height=1000"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Bun Cha (Vermicelli Salad)</h3>
<span className="text-lg font-normal text-[#5D4037]">$17.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Rice vermicelli noodles served with grilled pork, fresh herbs, mixed greens, and nuoc cham dressing.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Broken Rice &amp; Pork Chop" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl45Z8Hsg3lbD-9hRrMl0VIyjx5LnwD1n5qA&amp;s"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Broken Rice &amp; Pork Chop</h3>
<span className="text-lg font-normal text-[#5D4037]">$18.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Com Tam served with grilled pork chop, shredded pork skin, sunny-side-up egg, and pickled veggies.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Vietnamese Chicken Curry" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Vietnamese Chicken Curry</h3>
<span className="text-lg font-normal text-[#5D4037]">$17.90</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Tender chicken and sweet potato slow-cooked in a rich, fragrant coconut curry broth. Served with rice.</p>
</div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-4xl font-normal tracking-tight text-[#3E2723] serif">Stir Fry</h2>
<div className="h-px bg-[#3E2723]/10 flex-grow"></div>
</div>
<div className="space-y-10">
<div className="group flex gap-5 items-start">
<img alt="Lemongrass Chilli Beef" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Lemongrass Chilli Beef</h3>
<span className="text-lg font-normal text-[#5D4037]">$18.90</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Wok-tossed beef strips with fresh lemongrass, garlic, onion, and mild chili sauce over rice.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Garlic Bok Choy &amp; Tofu" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Garlic Bok Choy &amp; Tofu</h3>
<span className="text-lg font-normal text-[#5D4037]">$16.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Crispy tofu cubes and fresh bok choy stir-fried in a savory vegetarian oyster sauce.</p>
</div>
</div>
</div>
</section>
</div>

<div className="flex flex-col gap-16">

<section className="">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-4xl font-normal tracking-tight text-[#3E2723] serif">Soup (Pho)</h2>
<div className="h-px bg-[#3E2723]/10 flex-grow"></div>
</div>
<div className="space-y-10">
<div className="group flex gap-5 items-start">
<img alt="Classic Beef Pho" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Classic Beef Pho</h3>
<span className="text-lg font-normal text-[#5D4037]">$16.90</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Our signature 24-hour beef bone broth, flat rice noodles, rare beef slices, brisket, and fresh herbs.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Chicken Pho (Pho Ga)" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://www.simplyrecipes.com/thmb/QFPEzh4bYiFPqmANegJSYEOcvUM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__02__2017-02-07-ChickenPho-15-830b0600befc47999171d6eeb9bcb520.jpg"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Chicken Pho (Pho Ga)</h3>
<span className="text-lg font-normal text-[#5D4037]">$15.90</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Clear and aromatic chicken broth, rice noodles, shredded free-range chicken, topped with spring onions.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Spicy Beef Noodle (Bun Bo Hue)" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQv5Wzq_J84zHDP7gONZ5yCR9xhXSsGA76Nw&amp;s"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Spicy Beef Noodle (Bun Bo Hue)</h3>
<span className="text-lg font-normal text-[#5D4037]">$17.90</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Spicy lemongrass beef broth, thick round rice noodles, beef shank, and Vietnamese sausage.</p>
</div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-4xl font-normal tracking-tight text-[#3E2723] serif">Sides</h2>
<div className="h-px bg-[#3E2723]/10 flex-grow"></div>
</div>
<div className="space-y-10">
<div className="group flex gap-5 items-start">
<img alt="Steamed Jasmine Rice" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Steamed Jasmine Rice</h3>
<span className="text-lg font-normal text-[#5D4037]">$3.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">A perfect side portion of hot, fluffy steamed jasmine rice.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Prawn Crackers" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://www.foxyfolksy.com/wp-content/uploads/2022/06/prawn-crackers.jpg"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Prawn Crackers</h3>
<span className="text-lg font-normal text-[#5D4037]">$4.00</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Light, crispy, and savory deep-fried prawn crackers.</p>
</div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-4xl font-normal tracking-tight text-[#3E2723] serif">Drinks</h2>
<div className="h-px bg-[#3E2723]/10 flex-grow"></div>
</div>
<div className="space-y-10">
<div className="group flex gap-5 items-start">
<img alt="Vietnamese Iced Coffee" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://asianinspirations.com.au/wp-content/uploads/2018/12/R01583_Vietnamese_Iced_Coffee.jpg"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Vietnamese Iced Coffee</h3>
<span className="text-lg font-normal text-[#5D4037]">$6.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Traditional drip coffee served over ice with sweetened condensed milk. Strong and sweet.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Fresh Coconut Water" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Fresh Coconut Water</h3>
<span className="text-lg font-normal text-[#5D4037]">$6.00</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Chilled whole young coconut with fresh juice and soft coconut meat.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Vietnamese Lemonade" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Vietnamese Lemonade</h3>
<span className="text-lg font-normal text-[#5D4037]">$5.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Refreshing lime juice stirred with sugar and sparkling water over ice.</p>
</div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-4xl font-normal tracking-tight text-[#3E2723] serif">Smoothies &amp; Juices</h2>
<div className="h-px bg-[#3E2723]/10 flex-grow"></div>
</div>
<div className="space-y-10">
<div className="group flex gap-5 items-start">
<img alt="Fresh Mango Smoothie" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.eatthismuch.com/img/927279_tabitharwheeler_0429baa1-435d-4689-b5f9-382a6040fe09.jpg"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Fresh Mango Smoothie</h3>
<span className="text-lg font-normal text-[#5D4037]">$8.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">Blended fresh seasonal mango with ice and condensed milk for a sweet tropical treat.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Avocado Shake" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QOWkxeZOGiOZ-otk89xiFuqCh3fGkOq89Q&amp;s"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Avocado Shake (Sinh To Bo)</h3>
<span className="text-lg font-normal text-[#5D4037]">$8.50</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">A creamy, rich Vietnamese specialty made with ripe avocado, milk, and crushed ice.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<img alt="Fresh Pressed Orange Juice" className="w-24 h-24 rounded-2xl object-cover shadow-sm bg-[#3E2723]/5 shrink-0" src="https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&amp;h=400&amp;fit=crop"/>
<div className="flex-1 pt-1">
<div className="flex justify-between items-baseline gap-4">
<h3 className="text-xl font-normal tracking-tight text-[#3E2723]">Fresh Pressed Orange Juice</h3>
<span className="text-lg font-normal text-[#5D4037]">$7.00</span>
</div>
<p className="text-base text-[#5D4037]/80 font-light mt-1.5 leading-relaxed">100% pure fresh squeezed oranges. Made to order with no added sugar.</p>
</div>
</div>
</div>
</section>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 mt-32 mb-12">
<div className="flex items-center gap-4 mb-10">
<h2 className="text-4xl font-normal tracking-tight text-[#3E2723] serif">Info &amp; Reviews</h2>
<div className="h-px bg-[#3E2723]/10 flex-grow"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="p-10 rounded-[2rem] bg-[#3E2723]/5 flex flex-col gap-8 h-full">
<div className="flex items-center gap-3">
<iconify-icon className="text-3xl text-[#8D6E63]" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-2xl font-normal tracking-tight text-[#3E2723] serif">Opening Hours</h3>
</div>
<div className="space-y-4 text-lg text-[#5D4037] font-light mt-auto">
<div className="flex justify-between items-center border-b border-[#3E2723]/10 pb-4">
<span>Monday - Saturday</span>
<span className="font-normal text-[#3E2723]">8:00am - 5:00pm</span>
</div>
<div className="flex justify-between items-center pt-2">
<span>Sunday</span>
<span className="font-normal text-[#D84315]">Closed</span>
</div>
</div>
</div>

<div className="p-10 rounded-[2rem] border border-[#3E2723]/10 flex flex-col justify-between h-full bg-[#FDFCF8]">
<div className="flex gap-1 text-[#8D6E63] mb-6">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xl text-[#3E2723] font-light italic leading-relaxed mb-8">"Best Pho in Prahran! The broth is incredible and the service is always fast. My absolute go-to lunch spot."</p>
<div className="text-lg text-[#5D4037] font-normal tracking-tight flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#3E2723]/10 flex items-center justify-center text-[#3E2723]">SM</div>
                    Sarah M.
                </div>
</div>

<div className="p-10 rounded-[2rem] border border-[#3E2723]/10 flex flex-col justify-between h-full bg-[#FDFCF8]">
<div className="flex gap-1 text-[#8D6E63] mb-6">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xl text-[#3E2723] font-light italic leading-relaxed mb-8">"The Lemongrass Chicken Banh Mi is a must-try. Fresh ingredients, perfect crunch on the baguette, and amazing authentic flavors."</p>
<div className="text-lg text-[#5D4037] font-normal tracking-tight flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#3E2723]/10 flex items-center justify-center text-[#3E2723]">JT</div>
                    James T.
                </div>
</div>
</div>
</section>

<footer className="mt-24 border-t border-[#3E2723]/5 bg-[#FDFCF8] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#8D6E63]" icon="solar:shop-2-linear"></iconify-icon>
<span className="text-2xl font-normal tracking-tight text-[#3E2723] serif mt-1">Vietnamese Takeout</span>
</div>
<div className="flex flex-col items-center md:items-end gap-1 text-[#5D4037] text-base font-light">
<a className="hover:text-[#3E2723] transition-colors flex items-center gap-2" href="mailto:hello@vietnamesetakeout.com.au">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                    hello@vietnamesetakeout.com.au
                </a>
<span className="flex items-center gap-2 mt-1">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                    Prahran, AU
                </span>
</div>
<div className="flex items-center gap-6 text-[#5D4037]">
<a className="hover:text-[#3E2723] transition-colors flex items-center gap-2" href="https://instagram.com/vietnamesetakeoutprahran" target="_blank" title="Instagram">
<iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon>
<span className="sr-only">Instagram</span>
</a>
<a className="hover:text-[#3E2723] transition-colors flex items-center gap-2" href="https://facebook.com/vietnamesetakeoutprahran" target="_blank" title="Facebook">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="sr-only">Facebook</span>
</a>
</div>
</div>
<div className="text-center mt-12 text-sm text-[#5D4037]/50 font-light">
            © 2024 Vietnamese Takeout. All rights reserved.
        </div>
</footer>

    </>
  );
}
