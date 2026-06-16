import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
gold: {
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-slate-950/80');
                nav.classList.remove('border-b-0');
            } else {
                nav.classList.remove('bg-slate-950/80');
                nav.classList.add('border-b-0');
            }

            // Simple Parallax for Hero
            const heroBg = document.getElementById('hero-bg');
            let scrollPosition = window.pageYOffset;
            heroBg.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-gold-500 text-xl group-hover:rotate-12 transition-transform duration-300" icon="solar:buildings-3-linear"></iconify-icon>
<span className="font-serif text-xl text-white tracking-tighter uppercase font-medium">SkyCity</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#rooms">Rooms</a>
<a className="hover:text-white transition-colors" href="#amenities">Amenities</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-950 bg-white hover:bg-slate-200 transition-colors rounded-full" href="#booking">
                    Book Now
                </a>
<button className="md:hidden text-white p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Hotel Lobby" className="w-full h-full object-cover object-center scale-105" id="hero-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{transform: 'translateY(0px)'}}/>

<div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">

<div className="flex flex-wrap items-center justify-center gap-3 mb-8">
<div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium text-white">
<iconify-icon className="text-gold-400" icon="solar:star-fall-linear"></iconify-icon>
<span>4.8 Rated (217 Reviews)</span>
</div>
<div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium text-white">
<iconify-icon className="text-pink-400" icon="solar:hearts-linear"></iconify-icon>
<span>LGBTQ+ Friendly</span>
</div>
</div>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight font-medium leading-tight mb-6">
                Experience Luxury in the <br className="hidden md:block"/>
<span className="gold-gradient-text italic">Heart of Sadulpur</span>
</h1>
<p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                4.8 Rated Premium Stay | Comfort. Elegance. Exceptional Service.
            </p>

<div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-12">
<span className="flex items-center gap-2"><iconify-icon icon="solar:wi-fi-router-linear"></iconify-icon> Free WiFi</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:swimming-linear"></iconify-icon> Pool</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:car-linear"></iconify-icon> Free Parking</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:monitor-linear"></iconify-icon> Business Centre</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 text-sm font-medium rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-2" href="#booking">
                    Book Now
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 glass-panel text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center" href="#rooms">
                    Check Availability
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<iconify-icon className="text-2xl" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 text-gold-500 text-xs font-medium tracking-widest uppercase">
<span className="w-8 h-px bg-gold-500/50"></span>
                        Our Story
                    </div>
<h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight font-medium leading-tight">
                        A Premium Experience in the Heart of the City
                    </h2>
<p className="text-base text-slate-400 leading-relaxed font-light">
                        Sky City Hotel is a premium stay located in Ward No. 15, near Mohta Ice Factory, Sadulpur, Rajasthan. With modern amenities, exceptional service, and a peaceful atmosphere, we provide a luxury experience tailored for those who appreciate the finer things.
                    </p>
<p className="text-base text-slate-400 leading-relaxed font-light">
                        Whether you're visiting for business, a romantic getaway, or a family celebration, our subtle royal Rajasthan touches combined with modern contemporary design ensure an unforgettable stay.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Check-in</p>
<p className="text-lg text-white font-serif">1:00 PM</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Check-out</p>
<p className="text-lg text-white font-serif">11:00 AM</p>
</div>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gold-400">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Reception</p>
<a className="text-base text-white hover:text-gold-400 transition-colors" href="tel:+916375380899">+91 63753 80899</a>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 glass-panel p-2">
<img alt="Hotel Interior" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-500/20 rounded-2xl z-0"></div>
<div className="absolute top-1/2 -left-12 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950/50 relative border-y border-white/5" id="rooms">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<div className="inline-flex items-center gap-2 text-gold-500 text-xs font-medium tracking-widest uppercase justify-center">
<span className="w-4 h-px bg-gold-500/50"></span>
                    Accommodations
                    <span className="w-4 h-px bg-gold-500/50"></span>
</div>
<h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight font-medium">
                    Rest in Elegance
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group glass-panel rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Deluxe Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full text-xs text-white">From ₹3,500</div>
</div>
<div className="p-6 space-y-4">
<h3 className="font-serif text-xl text-white font-medium">Deluxe Room</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">Perfect for couples and solo travelers seeking comfort. Features modern decor, plush bedding, and city views.</p>
<div className="flex items-center gap-4 text-slate-400 pb-4 border-b border-white/10">
<iconify-icon className="text-lg" icon="solar:bed-linear" title="King Bed"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:bath-linear" title="Ensuite Bath"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:tv-linear" title="Smart TV"></iconify-icon>
</div>
<a className="block w-full text-center py-2.5 text-sm font-medium text-white glass-panel hover:bg-white/10 transition-colors rounded-lg" href="#booking">
                            Book Now
                        </a>
</div>
</div>

<div className="group glass-panel rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 relative">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 z-10"></div>
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Executive Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full text-xs text-white">From ₹6,000</div>
</div>
<div className="p-6 space-y-4">
<h3 className="font-serif text-xl text-white font-medium">Executive Suite</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">Our most premium offering. Includes a separate living area, luxury bath amenities, and panoramic views.</p>
<div className="flex items-center gap-4 text-slate-400 pb-4 border-b border-white/10">
<iconify-icon className="text-lg" icon="solar:bed-linear" title="King Bed"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:sofa-linear" title="Living Area"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:cup-hot-linear" title="Minibar"></iconify-icon>
</div>
<a className="block w-full text-center py-2.5 text-sm font-medium text-slate-950 bg-white hover:bg-slate-200 transition-colors rounded-lg" href="#booking">
                            Book Suite
                        </a>
</div>
</div>

<div className="group glass-panel rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Premium Family Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full text-xs text-white">From ₹5,500</div>
</div>
<div className="p-6 space-y-4">
<h3 className="font-serif text-xl text-white font-medium">Premium Family Room</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">Spacious accommodation designed for families. Two large beds, extra seating area, and kid-friendly amenities.</p>
<div className="flex items-center gap-4 text-slate-400 pb-4 border-b border-white/10">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" title="Family Size"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:bed-linear" title="Two Beds"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:gamepad-linear" title="Entertainment"></iconify-icon>
</div>
<a className="block w-full text-center py-2.5 text-sm font-medium text-white glass-panel hover:bg-white/10 transition-colors rounded-lg" href="#booking">
                            Book Now
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="amenities">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-4 space-y-6">
<h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight font-medium">
                        Curated for Your Comfort
                    </h2>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Every detail at Sky City Hotel is designed to elevate your stay. Enjoy a suite of premium amenities that cater to both relaxation and productivity.
                    </p>
</div>
<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
<iconify-icon className="text-xl" icon="solar:wi-fi-router-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium">Free Wi-Fi</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
<iconify-icon className="text-xl" icon="solar:air-conditioner-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium">Air Conditioning</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
<iconify-icon className="text-xl" icon="solar:swimming-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium">Swimming Pool</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
<iconify-icon className="text-xl" icon="solar:car-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium">Free Parking</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
<iconify-icon className="text-xl" icon="solar:monitor-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium">Business Centre</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium">Paid Breakfast</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
<iconify-icon className="text-xl" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium">24/7 Room Service</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
<iconify-icon className="text-xl" icon="solar:bath-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-300 font-medium">Modern Baths</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="flex justify-center gap-1 text-gold-400 mb-6 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h2 className="font-serif text-2xl md:text-4xl text-white font-medium leading-relaxed mb-8">
                "Best hotel in Sadulpur, amenities like a 3-star hotel, and food was delicious. Room service is amazing and staff is very polite."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full glass-panel overflow-hidden">
<img alt="Reviewer" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div className="text-left">
<p className="text-sm text-white font-medium">Verified Guest</p>
<p className="text-xs text-slate-500">Google Review</p>
</div>
</div>
<div className="mt-12 text-center">
<span className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-xs text-white">
<span className="text-gold-400 font-medium">4.8</span>
<span className="text-slate-500">out of 5 stars based on 217 reviews</span>
</span>
</div>
</div>
</section>

<section className="py-24" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight font-medium">Gallery</h2>
<a className="hidden md:flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors" href="#">
                    View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="col-span-2 row-span-2 group overflow-hidden rounded-2xl relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Lobby" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="glass-panel px-3 py-1 rounded-full text-xs text-white backdrop-blur-md">Grand Lobby</span>
</div>
</div>
<div className="group overflow-hidden rounded-2xl relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="group overflow-hidden rounded-2xl relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Restaurant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="col-span-2 group overflow-hidden rounded-2xl relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Pool" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-slate-950/50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight font-medium">Find Us</h2>
<div className="glass-panel p-8 rounded-2xl space-y-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 text-gold-500/10">
<iconify-icon className="text-8xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-sm text-slate-400 uppercase tracking-wider mb-2">Address</h3>
<p className="text-base text-white font-light">
                                Ward No 15, Mohalla Bhakad School<br/>
                                Near Mohta Ice Factory<br/>
                                Sadulpur, Rajasthan 331023
                            </p>
</div>
<div className="relative z-10">
<h3 className="text-sm text-slate-400 uppercase tracking-wider mb-2">Contact</h3>
<p className="text-base text-white font-light mb-1">+91 63753 80899</p>
<p className="text-base text-white font-light">reservations@skycityhotel.com</p>
</div>
<div className="pt-4 relative z-10">
<a className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors" href="#">
                                Get Directions <iconify-icon icon="solar:routing-linear"></iconify-icon>
</a>
</div>
</div>

<div className="aspect-video rounded-2xl glass-panel relative overflow-hidden group">
<div className="absolute inset-0 bg-slate-900/80 z-10 flex items-center justify-center backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-500">
<iconify-icon className="text-4xl text-white/50 group-hover:opacity-0 transition-opacity" icon="solar:map-linear"></iconify-icon>
</div>

<img alt="Map Area" className="w-full h-full object-cover grayscale opacity-30" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-2xl" id="booking">
<div className="mb-8">
<h3 className="font-serif text-2xl text-white font-medium mb-2">Reserve Your Stay</h3>
<p className="text-sm text-slate-400">Experience modern luxury in Rajasthan.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs text-slate-500 uppercase tracking-wider">First Name</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-700" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 uppercase tracking-wider">Last Name</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs text-slate-500 uppercase tracking-wider">Email</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-700" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 uppercase tracking-wider">Phone</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-700" placeholder="+91" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Check-in
                                </label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors css-date-picker" type="date"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Check-out
                                </label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors css-date-picker" type="date"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> Guests &amp; Rooms
                            </label>

<div className="relative">
<select className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer">
<option className="bg-slate-900 text-white">1 Room, 2 Adults</option>
<option className="bg-slate-900 text-white">1 Room, 1 Adult</option>
<option className="bg-slate-900 text-white">2 Rooms, 4 Adults</option>
<option className="bg-slate-900 text-white">Family Suite</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 uppercase tracking-wider">Special Requests</label>
<textarea className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors resize-none placeholder:text-slate-700" placeholder="Any special needs or preferences?" rows="2"></textarea>
</div>
<button className="w-full py-4 mt-4 bg-white text-slate-950 text-sm font-medium rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" type="submit">
                            Check Availability <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#020617] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1 space-y-6">
<a className="flex items-center gap-2 group inline-block" href="#">
<iconify-icon className="text-gold-500 text-xl" icon="solar:buildings-3-linear"></iconify-icon>
<span className="font-serif text-xl text-white tracking-tighter uppercase font-medium">SkyCity</span>
</a>
<p className="text-xs text-slate-500 font-light leading-relaxed max-w-xs">
                        A modern luxury boutique hotel experience in the heart of Sadulpur, designed for modern hospitality.
                    </p>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-gold-400 transition-colors" href="#about">Our Story</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#rooms">Accommodations</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#amenities">Amenities</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-6">Legal</h4>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-gold-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Cancellation Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-6">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:map-arrow-square-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-600">
<p>© 2026 Sky City Hotel. All rights reserved.</p>
<p className="mt-2 md:mt-0">Designed for modern hospitality.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform z-50" href="https://wa.me/916375380899" target="_blank">
<iconify-icon icon="solar:phone-calling-rounded-bold"></iconify-icon>
</a>



    </>
  );
}
