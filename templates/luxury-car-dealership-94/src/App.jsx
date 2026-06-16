import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
alabaster: '#F2F0EB',
softblack: '#141414',
warmgrey: '#8C8C88',
charcoal: '#2B2B2B',
bordergrey: '#D1D1D1',
champagne: '#D4AF37',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
},
letterSpacing: {
tightest: '-.05em',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 mix-blend-difference text-alabaster px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-500">
<div className="uppercase tracking-[0.2em] text-sm font-medium">Royal Drive</div>
<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium">
<a className="hover:text-warmgrey transition-colors" href="#">The Collection</a>
<a className="hover:text-warmgrey transition-colors" href="#">Bespoke</a>
<a className="hover:text-warmgrey transition-colors" href="#">Consign</a>
<a className="hover:text-warmgrey transition-colors" href="#">Journal</a>
</div>
<button className="md:hidden">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</nav>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Luxury Silhouette" className="w-full h-full object-cover opacity-90 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=2800&amp;auto=format&amp;fit=crop" style={{filter: 'brightness(0.6) contrast(1.1) saturate(0)'}}/>
</div>
<div className="relative z-10 text-center text-alabaster max-w-4xl px-6 fade-in-up">
<p className="text-xs tracking-[0.3em] uppercase mb-6 text-warmgrey">Automotive Artistry</p>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-8 font-medium">
                Curated for the <br/><span className="italic text-white">Connoisseur.</span>
</h1>
<p className="font-light text-sm md:text-base text-gray-300 max-w-lg mx-auto leading-relaxed mb-10">
                Kerala’s premier destination for pre-owned luxury. <br className="hidden md:block"/>
                Bentley. Porsche. Mercedes-Benz.
            </p>
<a className="inline-block border-b border-alabaster pb-1 text-sm tracking-widest uppercase hover:opacity-70 transition-opacity" href="#collection">
                View The Collection
            </a>
</div>
<div className="absolute bottom-10 w-full flex justify-center z-10 animate-bounce duration-[2000ms]">
<i className="w-4 h-4 text-alabaster opacity-50 stroke-[1]" data-lucide="arrow-down"></i>
</div>
</header>

<section className="py-24 md:py-32 pl-6 md:pl-12 overflow-hidden bg-alabaster" id="collection">
<div className="flex items-end justify-between pr-12 mb-16">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-softblack">The <span className="italic">Collection</span></h2>
<div className="hidden md:flex gap-4">
<button className="p-3 border border-softblack/10 rounded-full hover:bg-softblack hover:text-alabaster transition-all duration-300">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-left"></i>
</button>
<button className="p-3 border border-softblack/10 rounded-full hover:bg-softblack hover:text-alabaster transition-all duration-300">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-8 md:gap-12 pb-12 pr-6 no-scrollbar cursor-grab active:cursor-grabbing">

<div className="group min-w-[85vw] md:min-w-[30vw] flex-shrink-0">
<div className="relative overflow-hidden mb-6">
<img alt="BMW 7 Series" className="aspect-[4/5] object-cover w-full border border-bordergrey transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-alabaster/90 px-3 py-1 text-[10px] tracking-widest uppercase backdrop-blur-sm">Available</div>
</div>
<h3 className="font-serif text-2xl md:text-3xl mb-1 tracking-tight">The Bavarian Architect</h3>
<p className="text-xs uppercase tracking-widest text-warmgrey mb-3">BMW 7 Series • 740Li M Sport</p>
<div className="flex gap-4 text-xs text-softblack border-t border-softblack/10 pt-3">
<span>2023</span>
<span>4,200 km</span>
<span>Sapphire Black</span>
</div>
</div>

<div className="group min-w-[85vw] md:min-w-[30vw] flex-shrink-0">
<div className="relative overflow-hidden mb-6">
<img alt="Porsche 911" className="aspect-[4/5] object-cover w-full border border-bordergrey transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="font-serif text-2xl md:text-3xl mb-1 tracking-tight">The Stuttgart Legend</h3>
<p className="text-xs uppercase tracking-widest text-warmgrey mb-3">Porsche 911 • Carrera S</p>
<div className="flex gap-4 text-xs text-softblack border-t border-softblack/10 pt-3">
<span>2022</span>
<span>1,800 km</span>
<span>Agate Grey</span>
</div>
</div>

<div className="group min-w-[85vw] md:min-w-[30vw] flex-shrink-0">
<div className="relative overflow-hidden mb-6">
<img alt="Bentley" className="aspect-[4/5] object-cover w-full border border-bordergrey transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl md:text-3xl mb-1 tracking-tight">The British Aristocrat</h3>
<p className="text-xs uppercase tracking-widest text-warmgrey mb-3">Bentley Continental GT</p>
<div className="flex gap-4 text-xs text-softblack border-t border-softblack/10 pt-3">
<span>2021</span>
<span>8,500 km</span>
<span>Beluga Black</span>
</div>
</div>

<div className="group min-w-[85vw] md:min-w-[30vw] flex-shrink-0">
<div className="relative overflow-hidden mb-6">
<img alt="Mercedes S Class" className="aspect-[4/5] object-cover w-full border border-bordergrey transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl md:text-3xl mb-1 tracking-tight">The Executive Suite</h3>
<p className="text-xs uppercase tracking-widest text-warmgrey mb-3">Mercedes-Benz • S-Class</p>
<div className="flex gap-4 text-xs text-softblack border-t border-softblack/10 pt-3">
<span>2023</span>
<span>3,100 km</span>
<span>Obsidian</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
<div className="w-full md:w-1/2 order-2 md:order-1">
<div className="relative p-4 border-l border-b border-softblack/5">
<img alt="Detailed Inspection" className="w-full aspect-square object-cover border border-bordergrey grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute -bottom-6 -right-6 bg-alabaster p-6 border border-bordergrey shadow-sm max-w-[200px]">
<div className="flex items-center gap-1 mb-2">
<i className="w-3 h-3 fill-softblack text-softblack" data-lucide="star"></i>
<i className="w-3 h-3 fill-softblack text-softblack" data-lucide="star"></i>
<i className="w-3 h-3 fill-softblack text-softblack" data-lucide="star"></i>
<i className="w-3 h-3 fill-softblack text-softblack" data-lucide="star"></i>
<i className="w-3 h-3 fill-softblack text-softblack" data-lucide="star"></i>
</div>
<p className="text-xs font-serif italic">"Purchasing here felt more like an exclusive experience than a transaction."</p>
<p className="text-[10px] uppercase tracking-widest mt-2 text-warmgrey">— Richard Rajan</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 order-1 md:order-2">
<p className="text-xs tracking-[0.2em] uppercase text-warmgrey mb-6">Bespoke Standards</p>
<h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">The Royal <span className="italic">Standard.</span></h2>
<div className="space-y-8">
<p className="text-sm md:text-base leading-relaxed font-light text-softblack/80">
                        We do not sell cars; we transfer legacies. Every vehicle in our stable undergoes a forensic 150-point analysis to ensure perfection. From the engine harmonics to the grain of the leather, nothing escapes the curator’s eye.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
<div className="flex gap-4 items-start">
<i className="w-5 h-5 stroke-[1] text-warmgrey mt-1" data-lucide="check-circle"></i>
<div>
<h4 className="font-serif text-lg mb-1">White Glove Delivery</h4>
<p className="text-xs leading-relaxed text-gray-500">Delivered to your doorstep in our enclosed, climate-controlled transporter.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<i className="w-5 h-5 stroke-[1] text-warmgrey mt-1" data-lucide="scan-line"></i>
<div>
<h4 className="font-serif text-lg mb-1">360° Forensic Audit</h4>
<p className="text-xs leading-relaxed text-gray-500">A comprehensive mechanical and cosmetic verification by master technicians.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-softblack text-alabaster py-32 px-6 md:px-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a1a1a] hidden md:block"></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
<div className="max-w-xl">
<p className="text-xs tracking-[0.2em] uppercase text-warmgrey mb-6">Acquisition</p>
<h2 className="font-serif text-4xl md:text-6xl mb-6">A Fair <span className="italic text-warmgrey">Exchange.</span></h2>
<p className="font-light text-gray-400 leading-relaxed mb-10 max-w-md">
                    Instant liquidity for your premium asset. We offer market-leading valuations for pristine vehicles, handling all paperwork with discretion and efficiency.
                </p>
<a className="inline-flex items-center gap-2 bg-alabaster text-softblack px-8 py-4 text-xs uppercase tracking-widest hover:bg-warmgrey hover:text-white transition-colors duration-300" href="#">
                    Consign Your Masterpiece
                    <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="w-full md:w-auto">
<div className="flex gap-8 md:gap-16 border-t border-white/10 pt-8">
<div>
<span className="block text-3xl font-serif mb-1">24h</span>
<span className="text-[10px] uppercase tracking-widest text-warmgrey">Valuation Time</span>
</div>
<div>
<span className="block text-3xl font-serif mb-1">100%</span>
<span className="text-[10px] uppercase tracking-widest text-warmgrey">Paperwork Handling</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-alabaster">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl tracking-tight mb-2">Our Boutiques</h2>
<p className="text-xs uppercase tracking-widest text-warmgrey">Experience Royal Drive</p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-6 aspect-[3/4]">
<img alt="Kochi Showroom" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 border border-bordergrey" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl mb-2">Kochi</h3>
<p className="text-xs text-warmgrey mb-4">NH 66, Edappally</p>
<a className="text-[10px] uppercase tracking-widest border-b border-softblack/30 pb-1 group-hover:border-softblack transition-colors" href="#">Get Directions</a>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-6 aspect-[3/4]">
<img alt="Calicut Showroom" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 border border-bordergrey" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl mb-2">Calicut</h3>
<p className="text-xs text-warmgrey mb-4">Mini Bypass Road</p>
<a className="text-[10px] uppercase tracking-widest border-b border-softblack/30 pb-1 group-hover:border-softblack transition-colors" href="#">Get Directions</a>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-6 aspect-[3/4]">
<img alt="Trivandrum Showroom" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 border border-bordergrey" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl mb-2">Trivandrum</h3>
<p className="text-xs text-warmgrey mb-4">Kazhakkoottam</p>
<a className="text-[10px] uppercase tracking-widest border-b border-softblack/30 pb-1 group-hover:border-softblack transition-colors" href="#">Get Directions</a>
</div>
</div>
</div>
</section>

<footer className="bg-alabaster pt-24 pb-12 border-t border-softblack/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<h4 className="uppercase tracking-[0.2em] text-sm font-medium mb-6">Royal Drive</h4>
<p className="text-xs text-gray-500 leading-relaxed font-light">
                    Curating the finest pre-owned luxury automobiles for the discerning collector. An experience beyond the drive.
                </p>
</div>
<div className="flex gap-12 md:gap-24">
<div>
<h5 className="font-serif text-sm mb-4">Menu</h5>
<ul className="space-y-3 text-xs tracking-wide text-gray-500 font-light">
<li><a className="hover:text-softblack transition-colors" href="#">Inventory</a></li>
<li><a className="hover:text-softblack transition-colors" href="#">Sell Your Car</a></li>
<li><a className="hover:text-softblack transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-softblack transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-serif text-sm mb-4">Social</h5>
<ul className="space-y-3 text-xs tracking-wide text-gray-500 font-light">
<li><a className="hover:text-softblack transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-softblack transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-softblack transition-colors" href="#">Facebook</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 flex flex-col md:flex-row justify-between items-center text-[10px] text-warmgrey uppercase tracking-widest border-t border-softblack/5 pt-8">
<p>© 2024 Royal Drive. All Rights Reserved.</p>
<div className="font-serif italic lowercase text-lg mt-4 md:mt-0 text-softblack/20">rd.</div>
</div>
</footer>


    </>
  );
}
