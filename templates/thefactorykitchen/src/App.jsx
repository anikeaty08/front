import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#1B1B1B',
secondary: '#262626',
cream: '#F5F1E8',
wine: '#7A1E1E',
gold: '#C6A75E',
},
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['Inter', 'sans-serif'],
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-primary/80 border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-cream hover:text-gold transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="font-serif text-xl tracking-tighter uppercase font-medium" href="#">
                The Factory Kitchen
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
<a className="hover:text-gold transition-colors" href="#about">Story</a>
<a className="hover:text-gold transition-colors" href="#menu">Menu</a>
<a className="hover:text-gold transition-colors" href="#experience">Experience</a>
<a className="hover:text-gold transition-colors" href="#contact">Location</a>
</div>

<a className="hidden md:flex items-center justify-center px-6 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-primary transition-all duration-300" href="#reservations">
                Reserve
            </a>

<div className="w-6 md:hidden"></div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4">

<div className="absolute inset-0 z-0">
<img alt="Chef making fresh handmade pasta dough" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-primary/70"></div>

<div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30"></div>
</div>

<div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto mt-16">
<span className="text-gold text-xs uppercase tracking-widest mb-6 font-light">Authentic Italian Dining in Downtown Los Angeles</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-tight">
                Handmade Pasta.<br/>Industrial Soul.
            </h1>
<p className="text-sm md:text-base text-cream/70 font-light max-w-xl mb-12 leading-relaxed">
                An open-kitchen experience set inside a reclaimed factory space, serving traditional Italian dishes crafted with passion, heritage, and precision.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-gold text-primary text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300 flex items-center justify-center" href="#reservations">
                    Reserve a Table
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-cream/30 text-cream text-xs uppercase tracking-widest font-light hover:border-cream transition-colors duration-300 flex items-center justify-center" href="#menu">
                    View Menu
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-cream/50">
<iconify-icon height="24" icon="solar:arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 bg-secondary relative" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group overflow-hidden aspect-[4/5] lg:aspect-square">
<img alt="Industrial restaurant interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-white/10 m-4 z-10 pointer-events-none"></div>
</div>

<div className="flex flex-col justify-center">
<span className="text-gold text-xs uppercase tracking-widest mb-4 font-light">The Heritage</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white">Where Tradition<br/>Meets Industry</h2>
<p className="text-sm md:text-base text-cream/70 font-light leading-relaxed mb-12">
                    Located at 1300 Factory Place in DTLA, The Factory Kitchen blends historic industrial architecture with authentic Italian culinary traditions. Our open kitchen showcases the artistry of handmade pasta, prepared daily with time-honored techniques and premium ingredients.
                </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-gold mt-1" height="24" icon="solar:rolling-pin-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h3 className="text-sm font-medium mb-1 tracking-wide">Handmade Pasta Daily</h3>
<p className="text-xs text-cream/50 font-light">Rolled and cut fresh every morning.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-gold mt-1" height="24" icon="solar:chef-hat-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h3 className="text-sm font-medium mb-1 tracking-wide">Traditional Recipes</h3>
<p className="text-xs text-cream/50 font-light">Authentic flavors from regional Italy.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-gold mt-1" height="24" icon="solar:wineglass-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h3 className="text-sm font-medium mb-1 tracking-wide">Premium Wine</h3>
<p className="text-xs text-cream/50 font-light">Curated Italian and local selections.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-gold mt-1" height="24" icon="solar:hearts-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h3 className="text-sm font-medium mb-1 tracking-wide">Inclusive Space</h3>
<p className="text-xs text-cream/50 font-light">Proudly LGBTQ+ friendly environment.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-primary" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 md:mb-24">
<span className="text-gold text-xs uppercase tracking-widest mb-4 font-light block">Culinary Craft</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white">Signature Creations</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[3/4] mb-6 relative">
<img alt="Mandilli Di Seta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1621510456681-2330135e5871?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end mb-2">
<h3 className="font-serif text-2xl font-medium tracking-tight">Mandilli Di Seta</h3>
<span className="text-gold text-sm font-light">$26</span>
</div>
<div className="w-full h-px bg-white/10 mb-4 transition-colors duration-500 group-hover:bg-gold/50"></div>
<p className="text-sm text-cream/60 font-light">Delicate handkerchief pasta with almond basil pesto</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[3/4] mb-6 relative">
<img alt="Prosciutto Di Parma" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&amp;w=2132&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end mb-2">
<h3 className="font-serif text-2xl font-medium tracking-tight">Prosciutto Di Parma</h3>
<span className="text-gold text-sm font-light">$28</span>
</div>
<div className="w-full h-px bg-white/10 mb-4 transition-colors duration-500 group-hover:bg-gold/50"></div>
<p className="text-sm text-cream/60 font-light">Fried sage dough, stracciatella, aged balsamic</p>
</div>

<div className="group cursor-pointer md:mt-12"> 
<div className="overflow-hidden aspect-[3/4] mb-6 relative">
<img alt="Porchetta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&amp;w=2016&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end mb-2">
<h3 className="font-serif text-2xl font-medium tracking-tight">Porchetta</h3>
<span className="text-gold text-sm font-light">$36</span>
</div>
<div className="w-full h-px bg-white/10 mb-4 transition-colors duration-500 group-hover:bg-gold/50"></div>
<p className="text-sm text-cream/60 font-light">Rolled pork belly, aromatic herbs, seasonal root vegetables</p>
</div>
</div>
<div className="mt-20 flex justify-center">
<a className="group flex items-center gap-3 text-sm tracking-wide font-light text-cream/80 hover:text-white transition-colors" href="#">
                    Explore Full Menu
                    <iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-primary overflow-hidden border-y border-white/5" id="experience">
<div className="max-w-[100rem] mx-auto px-4 relative">

<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
<div className="bg-primary/80 backdrop-blur-sm p-8 md:p-12 border border-white/10 text-center">
<p className="font-serif text-3xl md:text-5xl font-medium tracking-tight italic text-white">
                        "Crafted. Curated. Celebrated."
                    </p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 opacity-70 hover:opacity-100 transition-opacity duration-700">
<div className="aspect-square md:aspect-[4/5] overflow-hidden">
<img alt="Chef plating" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square md:aspect-[4/5] overflow-hidden md:translate-y-12">
<img alt="Dining ambience" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square md:aspect-[4/5] overflow-hidden">
<img alt="Wine pouring" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-square md:aspect-[4/5] overflow-hidden md:translate-y-8">
<img alt="Open kitchen flames" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-primary relative" id="reservations">

<div className="absolute top-0 right-0 w-64 h-64 bg-wine/5 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="border border-gold/30 bg-secondary/50 p-8 md:p-16 backdrop-blur-sm">
<div className="text-center mb-12">
<iconify-icon className="text-gold mb-4" height="32" icon="solar:calendar-date-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Reserve Your Table</h2>
<p className="text-sm text-cream/60 font-light">We recommend booking in advance, especially for weekend dining.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative">
<input className="block w-full px-0 py-3 text-sm text-cream bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" id="name" placeholder=" " required="" type="text"/>
<label className="absolute text-sm text-cream/50 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 font-light tracking-wide" htmlFor="name">Full Name</label>
</div>

<div className="relative">
<input className="block w-full px-0 py-3 text-sm text-cream bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" id="email" placeholder=" " required="" type="email"/>
<label className="absolute text-sm text-cream/50 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 font-light tracking-wide" htmlFor="email">Email Address</label>
</div>

<div className="relative flex items-center">
<input className="block w-full px-0 py-3 text-sm text-cream bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold font-light tracking-wide" id="date" required="" type="date"/>
<iconify-icon className="absolute right-0 text-cream/50 pointer-events-none" height="18" icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="relative flex items-center">
<select className="block w-full px-0 py-3 text-sm text-cream bg-transparent border-0 border-b border-white/20 focus:outline-none focus:ring-0 focus:border-gold font-light tracking-wide cursor-pointer" required="">
<option disabled="" hidden="" selected="" value="">Time</option>
<option className="bg-primary" value="17:00">5:00 PM</option>
<option className="bg-primary" value="18:00">6:00 PM</option>
<option className="bg-primary" value="19:00">7:00 PM</option>
<option className="bg-primary" value="20:00">8:00 PM</option>
<option className="bg-primary" value="21:00">9:00 PM</option>
</select>
<iconify-icon className="absolute right-0 text-cream/50 pointer-events-none" height="18" icon="solar:clock-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="relative flex items-center">
<select className="block w-full px-0 py-3 text-sm text-cream bg-transparent border-0 border-b border-white/20 focus:outline-none focus:ring-0 focus:border-gold font-light tracking-wide cursor-pointer" required="">
<option disabled="" hidden="" selected="" value="">Guests</option>
<option className="bg-primary" value="1">1 Person</option>
<option className="bg-primary" value="2">2 People</option>
<option className="bg-primary" value="3">3 People</option>
<option className="bg-primary" value="4">4 People</option>
<option className="bg-primary" value="5">5+ People</option>
</select>
<iconify-icon className="absolute right-0 text-cream/50 pointer-events-none" height="18" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="relative">
<input className="block w-full px-0 py-3 text-sm text-cream bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" id="requests" placeholder=" " type="text"/>
<label className="absolute text-sm text-cream/50 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 font-light tracking-wide" htmlFor="requests">Special Requests (Optional)</label>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
<button className="w-full sm:w-auto px-10 py-4 bg-gold text-primary text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300" type="submit">
                            Reserve Now
                        </button>
<span className="text-xs text-cream/40 font-light uppercase tracking-widest">or</span>
<a className="w-full sm:w-auto px-10 py-4 border border-white/20 text-cream text-xs uppercase tracking-widest font-light hover:border-cream transition-colors duration-300 text-center flex justify-center items-center gap-2" href="#">
<iconify-icon height="16" icon="solar:ticket-linear" width="16"></iconify-icon>
                            Via OpenTable
                        </a>
</div>
</form>

<div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-2">
<div className="flex text-gold">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-half-bold" width="16"></iconify-icon>
</div>
<p className="text-xs text-cream/60 font-light tracking-wide">Rated 4.5 Stars from 1,052+ guests</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream text-primary">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16 text-center">What Our Guests Say</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-primary/10 p-8 md:p-10 hover:border-primary/30 transition-colors">
<div className="flex text-gold mb-6">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="font-serif text-xl tracking-tight leading-relaxed mb-6">"Very tasty dishes, homemade pasta, hearty sauces, and creative flavors. The industrial vibe makes it feel like a hidden gem."</p>
<span className="text-xs font-medium tracking-widest uppercase block text-primary/60">— Sarah M.</span>
</div>

<div className="border border-primary/10 p-8 md:p-10 hover:border-primary/30 transition-colors">
<div className="flex text-gold mb-6">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="font-serif text-xl tracking-tight leading-relaxed mb-6">"Every food was good — packed on weekend nights. The Mandilli Di Seta is easily the best pasta dish I've had in Downtown LA."</p>
<span className="text-xs font-medium tracking-widest uppercase block text-primary/60">— James T.</span>
</div>

<div className="border border-primary/10 p-8 md:p-10 hover:border-primary/30 transition-colors md:col-span-2 lg:col-span-1">
<div className="flex text-gold mb-6">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-half-bold" width="14"></iconify-icon>
</div>
<p className="font-serif text-xl tracking-tight leading-relaxed mb-6">"Impeccable service and a fantastic wine selection. Sitting near the open kitchen and watching the chefs work is an experience in itself."</p>
<span className="text-xs font-medium tracking-widest uppercase block text-primary/60">— Elena R.</span>
</div>
</div>
</div>
</section>

<section className="bg-secondary py-24" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="flex flex-col justify-center order-2 lg:order-1">
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-12 text-white">Visit Us</h2>
<div className="space-y-8 mb-12">
<div className="flex items-start gap-4">
<iconify-icon className="text-gold mt-1" height="24" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<span className="text-xs text-cream/50 uppercase tracking-widest block mb-1">Address</span>
<p className="text-sm md:text-base font-light tracking-wide text-cream/90">
                                1300 Factory Pl<br/>
                                Los Angeles, CA 90013
                            </p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-gold mt-1" height="24" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<span className="text-xs text-cream/50 uppercase tracking-widest block mb-1">Hours</span>
<p className="text-sm md:text-base font-light tracking-wide text-cream/90">
                                Monday - Sunday<br/>
                                Opens at 5:00 PM
                            </p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-gold mt-1" height="24" icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<span className="text-xs text-cream/50 uppercase tracking-widest block mb-1">Contact</span>
<p className="text-sm md:text-base font-light tracking-wide text-cream/90">
                                +1 213-996-6000<br/>
                                info@thefactorykitchen.com
                            </p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-transparent border border-white/20 text-center text-xs uppercase tracking-widest font-light hover:border-gold hover:text-gold transition-colors duration-300" href="#">
                        Get Directions
                    </a>
<a className="px-8 py-4 bg-transparent border border-white/20 text-center text-xs uppercase tracking-widest font-light hover:border-gold hover:text-gold transition-colors duration-300" href="tel:+12139966000">
                        Call Now
                    </a>
</div>
</div>

<div className="aspect-square lg:aspect-auto h-[400px] lg:h-[600px] bg-primary relative border border-white/5 order-1 lg:order-2 overflow-hidden group">
<img alt="DTLA Map aesthetic" className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-12 h-12 bg-primary/80 backdrop-blur-md rounded-full flex items-center justify-center border border-gold/30">
<iconify-icon className="text-gold" height="24" icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-primary pt-24 pb-12 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-4">
<h2 className="font-serif text-2xl tracking-tighter uppercase font-medium mb-6">The Factory Kitchen</h2>
<p className="text-xs text-cream/50 font-light max-w-xs leading-relaxed mb-6">
                        An open-kitchen experience set inside a reclaimed factory space, serving traditional Italian dishes in DTLA.
                    </p>
<div className="flex gap-4">
<a className="text-cream/50 hover:text-gold transition-colors" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-cream/50 hover:text-gold transition-colors" href="#">
<iconify-icon height="20" icon="solar:facebook-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-4 md:col-start-6">
<h3 className="text-xs text-gold uppercase tracking-widest font-light mb-6">Quick Links</h3>
<ul className="space-y-4">
<li><a className="text-sm font-light text-cream/70 hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="text-sm font-light text-cream/70 hover:text-white transition-colors" href="#menu">Menu</a></li>
<li><a className="text-sm font-light text-cream/70 hover:text-white transition-colors" href="#reservations">Reservations</a></li>
<li><a className="text-sm font-light text-cream/70 hover:text-white transition-colors" href="#">Private Events</a></li>
<li><a className="text-sm font-light text-cream/70 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div className="md:col-span-3">
<a className="block group" href="https://instagram.com/thefactorykitchen_dtla" target="_blank">
<h3 className="text-xs text-gold uppercase tracking-widest font-light mb-6 flex items-center gap-2">
                            @thefactorykitchen_dtla
                            <iconify-icon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" height="14" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</h3>
</a>
<div className="grid grid-cols-3 gap-2">
<div className="aspect-square bg-secondary overflow-hidden">
<img alt="Insta 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-secondary overflow-hidden">
<img alt="Insta 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1600803907087-f56d462fd26b?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-secondary overflow-hidden">
<img alt="Insta 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-cream/40 font-light tracking-wide">© 2026 The Factory Kitchen. All rights reserved.</p>
<div className="flex gap-6 text-xs text-cream/40 font-light">
<a className="hover:text-cream transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-cream transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-primary/90 backdrop-blur-md border-t border-white/10 z-50">
<a className="flex w-full items-center justify-center py-3 bg-gold text-primary text-xs font-medium tracking-widest uppercase shadow-[0_0_15px_rgba(198,167,94,0.3)]" href="#reservations">
            Reserve a Table
        </a>
</div>

    </>
  );
}
