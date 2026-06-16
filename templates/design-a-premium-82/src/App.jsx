import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

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

<a className="serif text-2xl tracking-[0.2em] font-medium text-neutral-900 uppercase" href="#">
                Aether
            </a>

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
<img alt="Luxury Coffee Texture" className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.1] grayscale-[30%]" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
<p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 animate-[fadeIn_1s_ease-out]">Est. 2024 • Paris</p>
<h1 className="serif text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-8 drop-shadow-lg reveal" style={{animationDelay: '0.2s'}}>
                The Art of <br/> <span className="italic font-normal">Extraction</span>
</h1>
<p className="max-w-lg mx-auto text-sm md:text-base font-light opacity-90 leading-relaxed mb-10 reveal" style={{animationDelay: '0.4s'}}>
                Experience coffee in its purest form. A sanctuary for the senses, crafted with precision, patience, and passion.
            </p>
<div className="reveal" style={{animationDelay: '0.6s'}}>
<a className="inline-block border border-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-all duration-500" href="#menu">
                    View Menu
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
<img alt="Barista pouring" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
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
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 space-y-4">
<span className="text-xs uppercase tracking-[0.2em] text-neutral-500">Curated Selection</span>
<h2 className="serif text-4xl md:text-5xl font-light text-neutral-900">Signature Offerings</h2>
</div>

<div className="flex flex-wrap justify-center gap-8 mb-16">
<button className="text-xs uppercase tracking-widest border-b border-neutral-900 pb-1 text-neutral-900">Coffee</button>
<button className="text-xs uppercase tracking-widest border-b border-transparent pb-1 text-neutral-400 hover:text-neutral-900 transition-colors">Specialty</button>
<button className="text-xs uppercase tracking-widest border-b border-transparent pb-1 text-neutral-400 hover:text-neutral-900 transition-colors">Patisserie</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Pour Over" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">V60 Pour Over</h3>
<span className="font-sans text-sm font-light">$8.00</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Ethiopian Yirgacheffe. Floral, tea-like, clean finish.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Flat White" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Silk Flat White</h3>
<span className="font-sans text-sm font-light">$6.50</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Double ristretto, micro-foam milk. Velvet texture.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Espresso Tonic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550950158-d0d960dff51b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Espresso Tonic</h3>
<span className="font-sans text-sm font-light">$9.00</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Cold brew concentrate, rosemary, premium tonic water.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Matcha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Ceremonial Matcha</h3>
<span className="font-sans text-sm font-light">$7.50</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Kyoto sourced grade-A matcha, hand whisked.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Affogato" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Noir Affogato</h3>
<span className="font-sans text-sm font-light">$10.00</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Madagascan vanilla bean gelato, double espresso shot.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
<img alt="Croissant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2">
<h3 className="serif text-xl font-light">Charcoal Croissant</h3>
<span className="font-sans text-sm font-light">$6.00</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">Activated charcoal pastry, french butter, sea salt.</p>
</div>
</div>
<div className="text-center mt-20">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300" href="#">
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
<div className="flex gap-1 text-neutral-900 mb-6">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="serif text-xl italic text-neutral-800 mb-6 leading-relaxed">"Minimalist perfection. The charcoal croissant paired with their signature V60 is an experience I crave daily."</p>
<div className="text-xs uppercase tracking-widest text-neutral-400">Marcus T.</div>
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
<div>
<h2 className="serif text-4xl md:text-5xl font-light mb-6">Visit Aether</h2>
<p className="text-neutral-400 font-light max-w-sm leading-relaxed">
                            We invite you to step away from the noise and immerse yourself in the present moment.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-neutral-500" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="serif text-lg text-white">Location</p>
<p className="text-neutral-400 font-light text-sm mt-1">102 Boulevard Haussmann,<br/>75008 Paris, France</p>
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
<p className="text-neutral-400 font-light text-sm">bonjour@aether-cafe.com<br/>+33 1 44 55 66 77</p>
</div>
</div>

<div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" id="name" placeholder=" " type="text"/>
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
<span className="text-xs uppercase tracking-widest">Send Message</span>
<iconify-icon className="group-hover:translate-x-2 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
<div className="mt-24 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-light">
<p>© 2024 Aether Coffee. All rights reserved.</p>
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
