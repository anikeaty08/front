import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

<button className="md:hidden text-neutral-900 hover:opacity-60 transition-opacity">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="serif uppercase text-2xl font-medium text-neutral-900 tracking-[0.2em]" href="/#">Fenil coffee </a>

<div className="hidden md:flex items-center space-x-12">
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors" href="#menu">Menu</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors" href="#about">Story</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors" href="#reviews">Reviews</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors" href="#contact">Visit</a>
</div>

<div className="flex items-center space-x-6">
<button className="text-neutral-900 hover:opacity-60 transition-opacity">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Coffee Texture" className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.1] grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef2ec9c8-e5a5-4524-ab59-2bf82f1fc346_3840w.jpg"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
<p className="md:text-sm uppercase animate-[fadeIn_1s_ease-out] text-xs tracking-[0.3em] mb-6">Est. 2026 • surat</p>
<h1 className="serif text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-8 drop-shadow-lg reveal" style={{animationDelay: '0.2s'}}>
                The Art of <br/> <span className="italic font-normal">Extraction</span>
</h1>
<p className="max-w-lg mx-auto text-sm md:text-base font-light opacity-90 leading-relaxed mb-10 reveal" style={{animationDelay: '0.4s'}}>
                Experience coffee in its purest form. A sanctuary for the senses, crafted with precision, patience, and passion.
            </p>
<div className="reveal" style={{animationDelay: '0.6s'}}>
<a className="inline-block uppercase hover:bg-white hover:text-neutral-900 transition-all duration-500 text-xs tracking-widest border-white border pt-4 pr-10 pb-4 pl-10" href="#menu">Explore Menu</a>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
<img alt="Barista pouring" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b2a1082-51bb-4e44-9dcb-4a2efd441efb_1600w.webp"/>
</div>

<div className="absolute -bottom-8 -right-8 w-32 h-32 border border-neutral-200 hidden md:block"></div>
</div>
<div className="order-1 md:order-2 space-y-8">
<span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">Our Philosophy</span>
<h2 className="serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight">
                    Every cup tells <br/> a <span className="italic">quiet</span> story.
                </h2>
<div className="w-12 h-px bg-neutral-900"></div>
<p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base">
                    We believe true luxury lies in simplicity. Our beans are sourced from the most exclusive micro-lots in Ethiopia and Colombia, roasted in small batches to preserve their delicate floral and fruit notes.
                </p>
<p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base">
                    Aether is not just a café; it is a pause in time. A minimalist haven designed for those who appreciate the subtle nuances of flavor and the profound beauty of craftsmanship.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="menu">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20 space-y-4">
<span className="text-xs uppercase tracking-[0.2em] text-neutral-500">Curated Selection</span>
<h2 className="serif text-4xl md:text-5xl font-light text-neutral-900">Signature Offerings</h2>
</div>

<div className="flex flex-wrap justify-center gap-8 mb-16">
<button className="uppercase cursor-pointer text-xs text-neutral-900 tracking-widest border-neutral-900 border-b pb-1 translate-x-8" onclick="window.location.href='/home'" role="button">Coffee</button><button className="uppercase hover:text-neutral-900 transition-colors cursor-pointer text-xs text-neutral-900 tracking-widest border-neutral-900 border-b pb-1 translate-x-6 -rotate-x-10" onclick="window.location.href='/specialty'" role="button">Specialty</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Pour Over" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b022681b-c1ff-4b16-9faa-5ae8e948e9a6_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">V60 Pour Over</h3>
<span className="font-sans text-sm font-light">$8.00</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Ethiopian Yirgacheffe. Floral, tea-like, clean finish.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Flat White" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/790a139e-a46f-43ea-8f11-9f3d31fa0ab7_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Silk Flat White</h3>
<span className="font-sans text-sm font-light">$6.50</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Double ristretto, micro-foam milk. Velvet texture.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Espresso Tonic" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/072f150d-230c-42f5-9942-75d35bc06037_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Espresso Tonic</h3>
<span className="font-sans text-sm font-light">$9.00</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Cold brew concentrate, rosemary, premium tonic water.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Matcha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c2b5956-78ac-4307-81d6-bca9b51ef139_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Ceremonial Matcha</h3>
<span className="font-sans text-sm font-light">$7.50</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Kyoto sourced grade-A matcha, hand whisked.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Affogato" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12fccb86-f299-4aeb-b4b3-b199474f4632_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Noir Affogato</h3>
<span className="font-sans text-sm font-light">$10.00</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Madagascan vanilla bean gelato, double espresso shot.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Croissant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/989f4cd4-be8c-4b66-98f9-01a1ac4c8447_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Charcoal Croissant</h3>
<span className="font-sans text-sm font-light">$6.00</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Activated charcoal pastry, french butter, sea salt.</p>
</div>
</div>
<div className="text-center mt-20">
<a className="inline-flex items-center gap-2 uppercase hover:gap-4 transition-all duration-300 text-xs tracking-widest" href="#" onclick="event.preventDefault(); const w = window.open('','_blank'); w.document.write(`&lt;!DOCTYPE html&gt;&lt;html lang='en'&gt;&lt;head&gt;&lt;meta charset='UTF-8'&gt;&lt;meta name='viewport' content='width=device-width, initial-scale=1.0'&gt;&lt;title&gt;Full Menu - Fenil's Coffee&lt;/title&gt;&lt;script src='https://cdn.tailwindcss.com'&gt;&lt;\/script&gt;&lt;link href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&amp;family=Inter:wght@300;400&amp;display=swap' rel='stylesheet'&gt;&lt;style&gt;body { font-family: 'Inter', sans-serif; background-color: #fafafa; color: #171717; } .serif { font-family: 'Cormorant Garamond', serif; }&lt;/style&gt;&lt;/head&gt;&lt;body className='p-6 md:p-12 lg:p-24 max-w-7xl mx-auto'&gt;&lt;div className='text-center mb-16'&gt;&lt;p className='text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4'&gt;Fenil's Coffee&lt;/p&gt;&lt;h1 className='serif text-5xl md:text-7xl font-light text-neutral-900 tracking-tight'&gt;Full Menu&lt;/h1&gt;&lt;/div&gt;&lt;div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'&gt;&lt;div&gt;&lt;h2 className='serif text-3xl mb-6 pb-2 border-b border-neutral-200 tracking-tight'&gt;🍳 Breakfast&lt;/h2&gt;&lt;ul className='space-y-4'&gt;&lt;li className='font-light'&gt;Classic Veg Breakfast &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Toast, Butter, Jam, Tea/Coffee)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Masala Omelette with Toast &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(optional egg section)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Avocado Toast &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Vegan option available)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Pancakes with Maple Syrup&lt;/li&gt;&lt;li className='font-light'&gt;Poha / Upma &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Indian Style)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Breakfast Sandwich &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Cheese / Veg Loaded)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Smoothie Bowl &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Fruits + Granola)&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div&gt;&lt;h2 className='serif text-3xl mb-6 pb-2 border-b border-neutral-200 tracking-tight'&gt;🍰 Sweets &amp; Desserts&lt;/h2&gt;&lt;ul className='space-y-4'&gt;&lt;li className='font-light'&gt;Chocolate Brownie &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Hot / With Ice Cream)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Cheesecake &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Strawberry / Blueberry)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Croissant &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Butter / Chocolate)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Muffins &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Choco Chip / Banana)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Waffles with Honey &amp; Fruits&lt;/li&gt;&lt;li className='font-light'&gt;Donuts &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Assorted Flavors)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Ice Cream Sundae&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div&gt;&lt;h2 className='serif text-3xl mb-6 pb-2 border-b border-neutral-200 tracking-tight'&gt;🌱 Vegan Bistro&lt;/h2&gt;&lt;ul className='space-y-4'&gt;&lt;li className='font-light'&gt;Vegan Buddha Bowl &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Quinoa + Veggies)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Vegan Burger &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Plant-Based Patty)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Grilled Veggie Wrap&lt;/li&gt;&lt;li className='font-light'&gt;Vegan Pasta &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Red Sauce / White Sauce)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Hummus &amp; Pita Platter&lt;/li&gt;&lt;li className='font-light'&gt;Vegan Smoothies &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Almond / Soy Milk)&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div&gt;&lt;h2 className='serif text-3xl mb-6 pb-2 border-b border-neutral-200 tracking-tight'&gt;🥪 Bistro Specials&lt;/h2&gt;&lt;ul className='space-y-4'&gt;&lt;li className='font-light'&gt;Margherita Pizza&lt;/li&gt;&lt;li className='font-light'&gt;Farmhouse Pizza&lt;/li&gt;&lt;li className='font-light'&gt;White Sauce Pasta&lt;/li&gt;&lt;li className='font-light'&gt;Red Sauce Pasta&lt;/li&gt;&lt;li className='font-light'&gt;Garlic Bread with Cheese&lt;/li&gt;&lt;li className='font-light'&gt;Loaded Nachos&lt;/li&gt;&lt;li className='font-light'&gt;Club Sandwich&lt;/li&gt;&lt;li className='font-light'&gt;French Fries &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Classic / Peri-Peri)&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div&gt;&lt;h2 className='serif text-3xl mb-6 pb-2 border-b border-neutral-200 tracking-tight'&gt;🥤 Beverages&lt;/h2&gt;&lt;h3 className='text-sm uppercase tracking-widest text-neutral-500 mb-3 mt-4'&gt;☕ Hot Drinks&lt;/h3&gt;&lt;ul className='space-y-3 mb-6'&gt;&lt;li className='font-light'&gt;Espresso&lt;/li&gt;&lt;li className='font-light'&gt;Cappuccino&lt;/li&gt;&lt;li className='font-light'&gt;Latte&lt;/li&gt;&lt;li className='font-light'&gt;Americano&lt;/li&gt;&lt;li className='font-light'&gt;Masala Chai&lt;/li&gt;&lt;li className='font-light'&gt;Hot Chocolate&lt;/li&gt;&lt;/ul&gt;&lt;h3 className='text-sm uppercase tracking-widest text-neutral-500 mb-3 mt-4'&gt;🧊 Cold Drinks&lt;/h3&gt;&lt;ul className='space-y-3 mb-6'&gt;&lt;li className='font-light'&gt;Iced Coffee&lt;/li&gt;&lt;li className='font-light'&gt;Cold Coffee &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(With Ice Cream)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Iced Latte&lt;/li&gt;&lt;li className='font-light'&gt;Fresh Lime Soda&lt;/li&gt;&lt;li className='font-light'&gt;Mojito &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Mint / Lemon)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Milkshakes &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Chocolate / Strawberry / Oreo)&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;h3 className='text-sm uppercase tracking-widest text-neutral-500 mb-3 mt-4'&gt;🧃 Fresh Juices&lt;/h3&gt;&lt;ul className='space-y-3'&gt;&lt;li className='font-light'&gt;Orange Juice&lt;/li&gt;&lt;li className='font-light'&gt;Watermelon Juice&lt;/li&gt;&lt;li className='font-light'&gt;Pineapple Juice&lt;/li&gt;&lt;li className='font-light'&gt;Mixed Fruit Juice&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div&gt;&lt;h2 className='serif text-3xl mb-6 pb-2 border-b border-neutral-200 tracking-tight'&gt;⭐ Specials (Signature Items)&lt;/h2&gt;&lt;ul className='space-y-4 mb-8'&gt;&lt;li className='font-light'&gt;Cafe Special Cold Coffee &lt;span className='text-xs text-neutral-500 block mt-0.5'&gt;(Secret Recipe 😎)&lt;/span&gt;&lt;/li&gt;&lt;li className='font-light'&gt;Chocolate Lava Pancakes&lt;/li&gt;&lt;li className='font-light'&gt;Signature Veg Loaded Pizza&lt;/li&gt;&lt;li className='font-light'&gt;Premium Brownie Blast&lt;/li&gt;&lt;li className='font-light'&gt;Detox Green Juice&lt;/li&gt;&lt;li className='font-light'&gt;Chef’s Special Pasta&lt;/li&gt;&lt;/ul&gt;&lt;h3 className='text-sm uppercase tracking-widest text-neutral-500 mb-3'&gt;💡 Optional Add-ons&lt;/h3&gt;&lt;ul className='space-y-3'&gt;&lt;li className='font-light'&gt;Extra Cheese&lt;/li&gt;&lt;li className='font-light'&gt;Extra Toppings&lt;/li&gt;&lt;li className='font-light'&gt;Ice Cream Scoop&lt;/li&gt;&lt;li className='font-light'&gt;Almond / Soy Milk&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;`); w.document.close();">
    View Full Menu <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="serif text-3xl md:text-4xl font-light text-center mb-16">Notes from the Community</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="p-8 border border-neutral-100 hover:border-neutral-300 transition-colors duration-500 bg-neutral-50/50">
<div className="flex gap-1 text-neutral-900 mb-6">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="serif text-xl italic text-neutral-800 mb-6 leading-relaxed">"An absolute triumph of design and taste. The attention to detail in every pour is palpable. A sanctuary in the city."</p>
<div className="text-xs uppercase tracking-widest text-neutral-400">Elena R.</div>
</div>

<div className="p-8 border border-neutral-100 hover:border-neutral-300 transition-colors duration-500 bg-neutral-50/50">
<div className="flex gap-1 text-neutral-900 mb-6 gap-x-1 gap-y-1">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="serif leading-relaxed text-xl italic text-neutral-800 mb-6">"Minimalist perfection. The charcoal croissant paired with their signature V60 is an experience I crave daily."</p>
<div className="uppercase text-xs text-neutral-400 tracking-widest">Marcus T.</div>
</div>

<div className="p-8 border border-neutral-100 hover:border-neutral-300 transition-colors duration-500 bg-neutral-50/50">
<div className="flex gap-1 text-neutral-900 mb-6">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="serif text-xl italic text-neutral-800 mb-6 leading-relaxed">"Finally, a place that understands that coffee is a ritual. The atmosphere is as exquisite as the brew."</p>
<div className="text-xs uppercase tracking-widest text-neutral-400">Sophia L.</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white py-24 md:py-32" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="space-y-12">
<div className="">
<h2 className="serif md:text-5xl text-4xl font-light mb-6">Visit Fenil's coffee </h2>
<p className="text-neutral-400 font-light max-w-sm leading-relaxed">
                            We invite you to step away from the noise and immerse yourself in the present moment.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="space-y-4">
<div className="flex gap-x-3 gap-y-3 items-start" onclick="window.location.href='https://maps.app.goo.gl/mgK5mDRg8rU6oXhi9?g_st=ac'" role="button">
<iconify-icon className="text-neutral-500 mt-1" height="16" icon="solar:map-point-linear" style={{color: 'rgb(115, 115, 115)'}} width="16"></iconify-icon>
<div className="">
<p className="serif text-lg text-white">Location</p>
<p className="text-sm font-light text-neutral-400 mt-1">10 lambe hanuman road,<br/> kapodra, surat</p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-neutral-500" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="serif text-lg text-white">Hours</p>
<p className="text-neutral-400 font-light text-sm mt-1">Mon - Fri: 07:00 - 19:00<br/>Sat - Sun: 08:00 - 18:00</p>
</div>
</div>
</div>
</div>
<div className="space-y-4 pt-8">
<p className="serif text-lg text-white">Contact</p>
<p className="text-sm font-light text-neutral-400">fenilgondaliya175@gmail.com<br/>+91 9825375672</p>
</div>
</div>

<div className="">
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative group">
<input className="peer focus:outline-none focus:border-white transition-colors placeholder-transparent text-white bg-transparent w-full border-neutral-700 border-b pt-3 pb-3" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-neutral-300 peer-focus:text-xs" htmlFor="name">Name</label>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-neutral-300 peer-focus:text-xs" htmlFor="email">Email</label>
</div>
</div>
<div className="relative group">
<textarea className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent resize-none" id="message" placeholder=" " rows="1"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-neutral-300 peer-focus:text-xs" htmlFor="message">Message</label>
</div>
<div className="pt-4">
<button className="group flex items-center justify-between w-full border border-neutral-700 px-6 py-4 text-white hover:bg-white hover:text-black transition-all duration-500" type="button">
<span className="uppercase text-xs tracking-widest">Send Message</span>
<iconify-icon className="group-hover:translate-x-2 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
<div className="mt-24 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-light">
<p className="">© 2026 Fenil's Coffee. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</section>

    </>
  );
}
