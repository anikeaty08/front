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
      

<div className="uppercase text-xs text-[#FDFBF7] tracking-widest font-mono text-center bg-[#2C2420] border-[#2C2420]/10 border-b pt-2 pb-2">Open Wed - Mon from 2pm - 10:30PM — Closed ON Tuesdays</div>

<nav className="sticky top-0 z-40 w-full bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#2C2420]/10 transition-all duration-300">
<div className="flex flex-col md:flex-row max-w-6xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 gap-x-4 gap-y-4 items-center justify-between">
<button className="md:hidden absolute left-6 top-6 text-[#2C2420]">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<a className="group flex flex-col items-center" href="#">
<h1 className="font-serif text-3xl md:text-4xl tracking-tighter text-[#88301B] group-hover:opacity-80 transition-opacity">
                    CAFE TERACOTTA
                </h1>
<span className="text-[10px] uppercase text-[#2C2420]/60 tracking-[0.2em] font-mono mt-1">Est. 1952 • Artisan Roast</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-[#2C2420]/80">
<a className="hover:text-[#88301B] transition-colors" href="#about">About</a>
<a className="hover:text-[#88301B] transition-colors" href="#menu">Menu</a>
<a className="hover:text-[#88301B] transition-colors" href="#gallery">Gallery</a>
<div className="relative group cursor-pointer">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[#88301B] rounded-full"></span>
</div>
</div>
</div>
</nav>

<header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#2C2420]/10">
<div className="absolute inset-0 z-0">
<img alt="Rustic Cafe Interior" className="w-full h-full object-cover opacity-90 grayscale-[20%] sepia-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b7a7795-fca6-463f-a8e8-23497912e713_3840w.png"/>
<div className="absolute inset-0 bg-[#2C2420]/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal">
<div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#FDFBF7]/30 bg-[#FDFBF7]/10 backdrop-blur-md text-[#FDFBF7] text-xs tracking-widest uppercase font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-pulse"></span>
                Now Serving Brunch
            </div>
<h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FDFBF7] leading-[0.9] tracking-tight mb-8 drop-shadow-lg">
                Taste the<br/><span className="italic font-light text-[#E6DCD3]">Slow Life.</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="group relative px-8 py-3 bg-[#88301B] text-[#FDFBF7] text-sm tracking-widest uppercase hover:bg-[#722816] transition-all duration-300 shadow-lg" href="#menu">
<span className="relative z-10 flex items-center gap-2">
                        View Menu 
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
</div>
</div>
</header>

<section className="bg-[#F5F2EB] border-[#2C2420]/10 border-b pt-24 pb-24" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-[#88301B]"></div>
<span className="font-mono text-xs tracking-[0.2em] uppercase text-[#88301B]">The Curator's Note</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2420] mb-8 tracking-tight leading-tight">
                        "We don't just brew coffee.<br/>We brew <span className="italic text-[#88301B]">memories.</span>"
                    </h2>
<div className="space-y-6 text-[#2C2420]/70 font-light leading-relaxed">
<p className="">The house was built in 1952. Around 2000, it became abandoned. In 2025, we bought it and renovated it using terracotta elements, restoring its beauty. Today, we carry that torch forward—honoring the slow, deliberate art of hospitality in a world that often moves too fast.</p>
<p className="">
                            Every cup we serve is a tribute to the legacy of the Ghosh family. We believe that true flavor lies in patience, which is why we still roast our beans in small batches and source our spices from the same local farms we've partnered with for decades.
                        </p>
</div>
<div className="mt-10 flex items-center gap-4">
<div className="text-2xl italic text-[#2C2420] font-serif">Mousumi Sarkar</div>
<div className="text-xs uppercase tracking-widest text-[#2C2420]/40 font-mono pt-2">Owner &amp; Head Brewer</div>
</div>
</div>

<div className="order-1 md:order-2 relative">
<div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#E6DCD3] shadow-2xl rotate-1 transition-transform duration-500 hover:rotate-0">
<img alt="The Founder" className="filter sepia-[0.3] contrast-[0.9] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10825aa2-8743-42fe-85d6-7945e9b89284_1600w.jpg"/>

<div className="absolute inset-4 border border-[#FDFBF7]/30 pointer-events-none"></div>
</div>

<div className="absolute top-8 -right-4 w-full h-full border-2 border-[#88301B]/20 z-0 -rotate-2"></div>
</div>
</div>
</div>
</section>

<section className="bg-white border-[#2C2420]/10 border-b pt-24 pb-24" id="gallery">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
<div className="">
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2420] tracking-tight">Glimpses</h2>
<p className="mt-4 text-[#2C2420]/60 max-w-md text-sm md:text-base">A visual collection of our favorite corners, freshest brews, and the rustic charm that makes Teracotta home.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#2C2420]/40 font-mono">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                    Captured Moments
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
<div className="md:col-span-2 relative group overflow-hidden bg-[#E6DCD3]">
<img alt="Cafe Interior" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter sepia-[0.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/116259a8-015e-4f92-a0c4-22b627985149_3840w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/20 absolute inset-0"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs font-mono uppercase tracking-widest bg-black/30 backdrop-blur-md px-2 py-1">Ambience</span>
</div>
</div>
<div className="md:row-span-2 relative group overflow-hidden bg-[#E6DCD3]">
<img alt="Latte Art" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter sepia-[0.1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1434a7f-c714-4f26-aaf7-ac271261cdbe_3840w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/20 absolute inset-0"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs font-mono uppercase tracking-widest bg-black/30 backdrop-blur-md px-2 py-1">Brewing</span>
</div>
</div>
<div className="relative group overflow-hidden bg-[#E6DCD3]">
<img alt="Social Vibe" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/231d313b-1fb7-4dbf-acd7-013a96be3301_3840w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/20 absolute inset-0"></div>
</div>
<div className="relative group overflow-hidden bg-[#E6DCD3]">
<img alt="Fresh Pastries" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c97ec5d-015a-45ef-9dae-908ade5b64e5_3840w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs font-mono uppercase tracking-widest bg-black/30 backdrop-blur-md px-2 py-1">Freshly Baked</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#F5F2EB] pt-24 pb-24 relative" id="menu">

<div className="hidden lg:block absolute top-10 right-12 z-20 float-card rotate-2 hover:rotate-0 transition-transform duration-300">
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#FDFBF7] border border-[#2C2420]/10 rotate-45 z-10"></div>
<div className="max-w-6xl mx-auto px-6 relative" id="menu-content">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-4xl text-[#2C2420] tracking-tight font-serif">The Menu</h2>
<div className="w-24 h-px bg-[#2C2420]/20 mx-auto mt-6"></div>
</div>

<div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16">

<div className="space-y-12">

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:coffee" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-2xl text-[#2C2420] font-serif">HOT BEVERAGES</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Black Tea (Darjeeling)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹30</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Masala Tea</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹30</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Lemon Grass Tea</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹40</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Green Tea</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹40</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Ginger Honey Tea</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Black Coffee</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹40</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Milk Coffee</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Hot Chocolate</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:glass-water" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"></path><path d="M6 12a5 5 0 0 1 6 0a5 5 0 0 0 6 0"></path></g></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">COLD BEVERAGES</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Cold Coffee</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹80</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Cold Coffee with Ice Cream</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Masala Coke (350 ml)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹60</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Fresh Lime Soda</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹60</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Blue Heaven</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹80</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Virgin Mojito</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹80</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Blueberry Mojito</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Watermelon Lemonade</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Mango Milk Shake</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Strawberry Milk Shake</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Tiramisu Shake</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chocolate Milk Shake</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Terracotta Spl Milk Shake</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Mineral Water (500 ml)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹10</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:croissant" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97a11 11 0 0 1 .132-6.487M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352a11 11 0 0 0-6.486.132"></path><path d="M18 5a4 3 0 0 1 4 3a2 2 0 0 1-2 2a10 10 0 0 0-5.139 1.42M5 18a3 4 0 0 0 3 4a2 2 0 0 0 2-2a10 10 0 0 1 1.42-5.14"></path><path d="M8.709 2.554a10 10 0 0 0-6.155 6.155a1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"></path></g></svg>
<h3 className="text-2xl text-[#2C2420] font-serif">BAKERY</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Butter Toast</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹40</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Bun Maska</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹40</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Cheese Butter Toast</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹60</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Cheese Omelet</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Veg Sandwich Grill</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹80</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Cheese-Corn Sandwich Grill</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Paneer Sandwich Grill</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Chicken Sandwich Grill</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Cheese Chicken Sandwich</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Veg Cheese Burger</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Chicken Cheese Burger</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Brownie with Chocolate Sauce</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
</div>
</div>
</div>

<div className="space-y-12">

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:soup" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9m-5 0h10m2.5-9L22 6m-5.75-3c.27.1.8.53.75 1.36c-.06.83-.93 1.2-1 2.02c-.05.78.34 1.24.73 1.62m-5.48-5c.27.1.8.53.74 1.36c-.05.83-.93 1.2-.98 2.02c-.06.78.33 1.24.72 1.62M6.25 3c.27.1.8.53.75 1.36c-.06.83-.93 1.2-1 2.02c-.05.78.34 1.24.74 1.62" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">SOUP</h3>
</div>
<div className="space-y-4">
<h5 className="text-sm tracking-widest uppercase text-[#88301B] font-mono mt-4 mb-2">Veg</h5>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Clear Soup</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹70</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Sweet Corn Soup</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹80</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Hot &amp; Sour Soup</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹80</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Manchow Soup</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<h5 className="text-sm tracking-widest uppercase text-[#88301B] font-mono mt-6 mb-2">Non-Veg</h5>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Clear Soup</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹90</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Sweet Corn Soup</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Hot &amp; Sour Soup</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Manchow Soup</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:leaf" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">STARTERS (VEG)</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">French Fries Classic</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">French Fries Peri Peri</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Paneer Pakora (6 pcs)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Veg Cheese Balls</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Crispy Chilli Baby Corn</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹180</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Steam Sweet Corn</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Crispy Sweet Corn</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹140</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Terracotta Special Alu Chop (2 pcs)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹50</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:drumstick" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23a4.5 3.43 135 0 0-6.23 6.23"></path><path d="m8.29 12.71l-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"></path></g></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">STARTERS (NON-VEG)</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Fish Finger (5 pcs) (Tilapia/Vetki)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹140 / ₹260</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Fish N Chips (Vetki)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹280</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Cutlet (2 pcs)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹180</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Pakora (6 pcs)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Lollipop (4 pcs)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹140</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Nuggets</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Strips (4 pcs)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹140</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Popcorn Chicken</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹150</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Cheese Ball</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹160</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Crispy Chicken</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹180</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken in Honey Barbecue Sauce</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹200</span></div></div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-16 md:gap-24">

<div className="space-y-12">

<div className="">
<div className="flex gap-4 mb-6 gap-x-4 gap-y-4 items-center">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:chef-hat" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="flex flex-col">
<h3 className="font-serif text-2xl text-[#2C2420]">MOMO</h3>
<span className="text-[10px] uppercase text-[#88301B]/80 tracking-widest font-mono mt-1">All plates contain 6 pcs</span>
</div>
</div>
<div className="space-y-4">
<h5 className="text-sm tracking-widest uppercase text-[#88301B] font-mono mt-4 mb-2">Veg</h5>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Veg Steam Momo</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹70</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Fried Veg Momo</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹80</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Pan Fried Veg Momo</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<h5 className="text-sm tracking-widest uppercase text-[#88301B] font-mono mt-6 mb-2">Chicken</h5>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Steam Momo</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹80</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Fried Chicken Momo</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Pan Fried Chicken Momo</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Kurkure Momo</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Jhol Momo</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹140</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:utensils" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">PASTA <span className="text-sm font-sans italic text-[#2C2420]/60">(Red/White)</span></h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Veg Pasta</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Cheese Pasta</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Pasta</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Cheese Chicken Pasta</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹140</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:sandwich" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m2.37 11.223l8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"></path><path d="m6.67 15l6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"></path><rect height="4" rx="1" width="20" x="2" y="11"></rect></g></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">WRAPS</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Veg Cheese Wrap</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹80</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Cheese Wrap</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:ice-cream-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"></path><path d="M12.14 11a3.5 3.5 0 1 1 6.71 0"></path><path d="M15.5 6.5a3.5 3.5 0 1 0-7 0"></path></g></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">ICE CREAM</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Vanilla with Chocolate Sauce</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹60</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Brownie with Ice Cream</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Sizzler Ice Cream</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹160</span></div></div>
</div>
</div>
</div>

<div className="space-y-12">

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:utensils-crossed" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m16 2l-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8m-7 7L3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0zm0 0l7 7m-19.9-.2l6.4-6.3M19 5l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">NOODLES</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Veg Noodles</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Egg Noodles</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Noodles</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹140</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Mix Noodles</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹160</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Terracotta Special Noodles</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹180</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<span className="iconify text-[#88301B] text-2xl" data-icon="lucide:bowl-steam"></span>
<h3 className="font-serif text-2xl text-[#2C2420]">RICE</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Veg Fried Rice</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹100</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Egg Fried Rice</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹120</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chicken Fried Rice</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹140</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Mix Fried Rice</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹160</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Terracotta Special Fried Rice</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹180</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:flame" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">CHINESE GRAVY</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chilli Chicken (8 pcs)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹200</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chilli Paneer (8 pcs)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹200</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Chilli Mushroom</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹200</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Paneer Butter Masala</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹200</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:package-open" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z"></path></g></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">COMBOS</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Veg Chow + 4 pcs Chilli Chicken/Paneer</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹200</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Mix Chow + 4 pcs Chilli Chicken/Paneer</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹240</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Veg Fried Rice + 4 pcs Chilli Chicken/Paneer</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹200</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Mix Fried Rice + 4 pcs Chilli Chicken/Paneer</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹240</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Veg Fried Rice + 4 pcs Paneer Butter Masala</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹200</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Mix Fried Rice + 4 pcs Paneer Butter Masala</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">₹240</span></div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2C2420] text-[#FDFBF7] pt-20 pb-10 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<h3 className="font-serif text-2xl mb-6 text-[#88301B]">Cafe Teracotta</h3>
<p className="text-white/60 text-sm leading-relaxed mb-6">
                        Old school hospitality in a modern world. Come for the coffee, stay for the warmth.
                    </p>
<div className="flex gap-4">
<a className="text-white/60 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div className="">
<h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Address</h4>
<p className="text-sm text-white/80 leading-relaxed">
                        29/4 Girish Ghosh Sarani,<br/>
                        Hakimpara (Ward No. 16),<br/>
                        Siliguri, Dist. Darjeeling
                    </p>
</div>
<div className="">
<h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Contact</h4>
<ul className="text-sm text-white/80 leading-loose">
<li className="break-words">Cafeterracotta1952@gmail.com</li>
<li className="">0353-3529867</li>
<li className="">+91 9547679648</li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Hours</h4>
<ul className="text-sm text-white/80 leading-loose">
<li className="flex justify-between w-full max-w-[200px]"><span>Wed-Mon</span> <span>2pm - 10:30pm</span></li>
<li className="flex justify-between w-full max-w-[200px] text-[#88301B]"><span>Tuesday</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-mono">
<p>© 2024 Cafe Teracotta. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
