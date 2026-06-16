import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="flex flex-col" href="#">
<span className="uppercase text-2xl font-serif font-medium text-stone-900 tracking-tight leading-none">NubyLove</span>
<span className="text-[10px] font-medium tracking-[0.2em] text-amber-700 uppercase leading-none mt-1">Massage Spa</span>
</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#about">Philosophy</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#massage">Massages</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#wellness">Wellness</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#beauty">Beauty</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-amber-900 transition-colors shadow-sm" href="#contact">
                        Book Appointment
                    </a>
<button className="md:hidden p-2 text-stone-600 hover:text-stone-900" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 text-base font-medium text-stone-600 hover:bg-stone-50 rounded-lg" href="#home">Home</a>
<a className="block px-3 py-3 text-base font-medium text-stone-600 hover:bg-stone-50 rounded-lg" href="#about">Philosophy</a>
<a className="block px-3 py-3 text-base font-medium text-stone-600 hover:bg-stone-50 rounded-lg" href="#massage">Massages</a>
<a className="block px-3 py-3 text-base font-medium text-stone-600 hover:bg-stone-50 rounded-lg" href="#wellness">Wellness</a>
<a className="block mt-4 text-center px-6 py-3 bg-stone-900 text-white font-medium rounded-lg" href="#contact">Book Now</a>
</div>
</div>
</nav>

<section className="relative h-[90vh] flex items-center justify-center overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<img alt="Spa Ambience" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
<span className="inline-block text-amber-200 font-medium tracking-[0.2em] uppercase text-xs mb-4">Heed the call of rejuvenation</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-medium mb-6 leading-tight text-shadow">
                Find Your Bliss<br/> <span className="italic font-light">at NubyLove</span>
</h1>
<p className="text-stone-100 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Leave it all behind and enter a sanctuary where time stands still. We stand as the best massage spa in town, dedicated to delivering personalized and therapeutic experiences.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-stone-100 transition-all min-w-[180px]" href="#massage">
                    View Services
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-white text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all min-w-[180px] backdrop-blur-sm" href="#contact">
                    Book Now
                </a>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
<img alt="Relaxation" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-xl shadow-lg max-w-xs hidden md:block border border-stone-100">
<p className="font-serif text-2xl text-stone-900 italic">"Beyond Loved"</p>
<p className="text-xs text-stone-500 mt-2 uppercase tracking-wider">Our Core Philosophy</p>
</div>
</div>
<div>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">A Sanctuary for<br/>Self-Care</h2>
<div className="w-12 h-0.5 bg-amber-900 mb-8"></div>
<p className="text-stone-600 mb-6 leading-relaxed font-light text-lg">
                        At NubyLove Massage Spa, we think being healthy and happy is all about loving yourself. We offer more than just a short break from everyday life; we offer a way to change your life for the better. 
                    </p>
<p className="text-stone-600 mb-8 leading-relaxed font-light">
                        By taking time for yourself often, you can fill every part of your life with more energy and calmness. Whether through our signature massages, wood therapy, or beauty treatments, our mission is to help you find balance.
                    </p>
<div className="grid grid-cols-2 gap-6 mt-10">
<div className="flex items-center gap-3">
<div className="p-2 bg-amber-100 rounded-full text-amber-900">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-800">Holistic Healing</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-amber-100 rounded-full text-amber-900">
<iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-800">Expert Therapists</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-amber-100 rounded-full text-amber-900">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-800">Natural Products</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-amber-100 rounded-full text-amber-900">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-800">Open 24/7</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="massage">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-amber-800 font-medium tracking-widest uppercase text-xs">Restore Your Body</span>
<h2 className="text-3xl md:text-4xl font-serif text-stone-900 mt-3 mb-6">Signature Massages</h2>
<p className="text-stone-500 font-light max-w-2xl mx-auto">
                    From traditional Thai techniques to advanced multi-hand therapies. 
                    <br/><span className="text-xs mt-2 block opacity-75">Pricing typically starts at 800 GHS (15min) up to 6400 GHS (120min).</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 bg-stone-50 hover:bg-stone-900 rounded-2xl transition-all duration-300 border border-stone-100 hover:border-stone-900">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white group-hover:bg-stone-800 rounded-xl text-stone-900 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:lotus-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-serif text-stone-900 group-hover:text-white mb-3">Thai Traditional</h3>
<p className="text-stone-500 group-hover:text-stone-400 text-sm leading-relaxed mb-6">
                        A unique blend of gentle stretching and rhythmic massage to balance energy and improve flexibility. Performed fully clothed.
                    </p>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-white flex items-center gap-2" href="#contact">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-stone-50 hover:bg-stone-900 rounded-2xl transition-all duration-300 border border-stone-100 hover:border-stone-900">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white group-hover:bg-stone-800 rounded-xl text-stone-900 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-serif text-stone-900 group-hover:text-white mb-3">Multi-Hand Therapy</h3>
<p className="text-stone-500 group-hover:text-stone-400 text-sm leading-relaxed mb-6">
                        Experience the ultimate luxury with our 4-Hands, 6-Hands, or the exclusive 8-Hands massage. Synchronized movements for profound relaxation.
                    </p>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-white flex items-center gap-2" href="#contact">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-stone-50 hover:bg-stone-900 rounded-2xl transition-all duration-300 border border-stone-100 hover:border-stone-900">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white group-hover:bg-stone-800 rounded-xl text-stone-900 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-serif text-stone-900 group-hover:text-white mb-3">Thai Oil &amp; Lotion</h3>
<p className="text-stone-500 group-hover:text-stone-400 text-sm leading-relaxed mb-6">
                        Smooth, gentle strokes using premium oils or lotions to soften muscles, relieve pain, and hydrate the skin.
                    </p>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-white flex items-center gap-2" href="#contact">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-stone-50 hover:bg-stone-900 rounded-2xl transition-all duration-300 border border-stone-100 hover:border-stone-900">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white group-hover:bg-stone-800 rounded-xl text-stone-900 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:dumbbell-large-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-serif text-stone-900 group-hover:text-white mb-3">Sport &amp; Deep Tissue</h3>
<p className="text-stone-500 group-hover:text-stone-400 text-sm leading-relaxed mb-6">
                        Targeted therapy for athletes and active individuals to enhance performance, prevent injury, and release chronic muscle tension.
                    </p>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-white flex items-center gap-2" href="#contact">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-stone-50 hover:bg-stone-900 rounded-2xl transition-all duration-300 border border-stone-100 hover:border-stone-900">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white group-hover:bg-stone-800 rounded-xl text-stone-900 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:fire-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-serif text-stone-900 group-hover:text-white mb-3">Hot &amp; Cold Stone</h3>
<p className="text-stone-500 group-hover:text-stone-400 text-sm leading-relaxed mb-6">
                        Therapeutic use of heated stones to melt tension or chilled stones to reduce inflammation and refresh the body.
                    </p>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-white flex items-center gap-2" href="#contact">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-stone-50 hover:bg-stone-900 rounded-2xl transition-all duration-300 border border-stone-100 hover:border-stone-900">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white group-hover:bg-stone-800 rounded-xl text-stone-900 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-serif text-stone-900 group-hover:text-white mb-3">Specialty Techniques</h3>
<p className="text-stone-500 group-hover:text-stone-400 text-sm leading-relaxed mb-6">
                        Including Amatsu, Biodynamic, Reiki, Acqua Cupping, and Percussion massage to address specific health needs.
                    </p>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-white flex items-center gap-2" href="#contact">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white relative overflow-hidden" id="wellness">

<div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Holistic &amp; Intimate Wellness</h2>
<p className="text-stone-400 font-light max-w-xl">
                        Ancient traditions meet modern therapy. We offer specialized treatments designed to harmonize mind, body, and spirit through deeper connection.
                    </p>
</div>
<div className="flex gap-2">
<span className="px-4 py-1 rounded-full border border-stone-700 text-xs uppercase tracking-wider text-stone-300">Tantra</span>
<span className="px-4 py-1 rounded-full border border-stone-700 text-xs uppercase tracking-wider text-stone-300">Nuru</span>
<span className="px-4 py-1 rounded-full border border-stone-700 text-xs uppercase tracking-wider text-stone-300">Yoni/Lingam</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50 backdrop-blur-sm">
<h3 className="text-2xl font-serif text-amber-100 mb-4">Tantric &amp; Nuru Massage</h3>
<p className="text-stone-300 font-light leading-relaxed mb-6">
                        Rooted in ancient Eastern practices, these massages utilize specialized gels (Nuru) and mindful touch to foster deep intimacy, emotional healing, and spiritual connection. A holistic approach to release stored trauma and enhance well-being.
                    </p>
<ul className="space-y-3 mb-8 text-sm text-stone-400">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon> Nuru Massage (60m: 8,400 GHS)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon> Couples Tantric (Starting at 16,800 GHS)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon> Lingam &amp; Yoni Therapy</li>
</ul>
<a className="text-white border-b border-amber-500 pb-1 text-sm uppercase tracking-wide hover:text-amber-400 transition-colors" href="#contact">Inquire for Private Session</a>
</div>

<div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50 backdrop-blur-sm">
<h3 className="text-2xl font-serif text-amber-100 mb-4">Body Sculpting &amp; Detox</h3>
<p className="text-stone-300 font-light leading-relaxed mb-6">
                        Non-invasive therapies designed to contour the body, improve digestion, and support detoxification. From Wood Therapy to Lymphatic Drainage, we help you achieve your aesthetic and health goals naturally.
                    </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-4 bg-stone-900 rounded-lg">
<h4 className="text-amber-200 font-serif mb-1">Wood Therapy</h4>
<p className="text-xs text-stone-500">Sculpting &amp; Cellulite Reduction</p>
</div>
<div className="p-4 bg-stone-900 rounded-lg">
<h4 className="text-amber-200 font-serif mb-1">Flat Stomach</h4>
<p className="text-xs text-stone-500">Digestion &amp; Detox (10 Sessions)</p>
</div>
<div className="p-4 bg-stone-900 rounded-lg">
<h4 className="text-amber-200 font-serif mb-1">Hydro Bath</h4>
<p className="text-xs text-stone-500">Water pressure therapy</p>
</div>
<div className="p-4 bg-stone-900 rounded-lg">
<h4 className="text-amber-200 font-serif mb-1">Lymphatic</h4>
<p className="text-xs text-stone-500">Immune system boost</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="beauty">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<span className="text-amber-800 font-medium tracking-widest uppercase text-xs">Radiance</span>
<h2 className="text-4xl font-serif text-stone-900 mt-3 mb-6">Facials &amp; Beauty</h2>
<p className="text-stone-600 font-light mb-8">
                        Indulge in the ultimate skincare experience. From anti-aging therapies to bridal makeup, our treatments use high-quality, natural ingredients to reveal your inner glow.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1"><iconify-icon className="text-amber-900" icon="solar:cosmetic-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-lg font-serif text-stone-900">Signature Facials</h4>
<p className="text-sm text-stone-500 mt-1">Deep cleansing, exfoliation, and hydration tailored to your skin type. Anti-wrinkle, Chemical Peel, and Microdermabrasion options available.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1"><iconify-icon className="text-amber-900" icon="solar:magic-stick-3-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-lg font-serif text-stone-900">Professional Make-Up</h4>
<p className="text-sm text-stone-500 mt-1">Nude make-up for a natural look or full Bridal services. We use hygienic practices with individualized sets.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1"><iconify-icon className="text-amber-900" icon="solar:bath-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-lg font-serif text-stone-900">Body Scrubs &amp; Vagicials</h4>
<p className="text-sm text-stone-500 mt-1">Exfoliating body treatments and specialized intimate care to enhance confidence and health.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px]">
<img alt="Facial Treatment" className="w-full h-full object-cover rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-serif text-center text-stone-900 mb-16">Guest Reviews</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-stone-50 p-8 rounded-xl relative">
<iconify-icon className="text-4xl text-stone-200 absolute top-6 right-6" icon="solar:quote-up-linear"></iconify-icon>
<div className="flex text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6 text-sm">
                        "Great service, lovely atmosphere. Nice swimming pool. Great hospitality, 24hrs service, very reliable. You can simply book an appointment at any time."
                    </p>
<div className="font-serif text-stone-900">Mary Quintela</div>
<div className="text-xs text-stone-400 uppercase tracking-wide">Accountant</div>
</div>

<div className="bg-stone-50 p-8 rounded-xl relative">
<iconify-icon className="text-4xl text-stone-200 absolute top-6 right-6" icon="solar:quote-up-linear"></iconify-icon>
<div className="flex text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6 text-sm">
                        "Their place is the neatest, it is in a serene environment and they give a wonderfully priced service. Definitely going back."
                    </p>
<div className="font-serif text-stone-900">Olamide Emmanuel</div>
<div className="text-xs text-stone-400 uppercase tracking-wide">Public Relations</div>
</div>

<div className="bg-stone-50 p-8 rounded-xl relative">
<iconify-icon className="text-4xl text-stone-200 absolute top-6 right-6" icon="solar:quote-up-linear"></iconify-icon>
<div className="flex text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6 text-sm">
                        "This is a great place. I surely will recommend this place to anyone. Reception is A+ and they are lovely people."
                    </p>
<div className="font-serif text-stone-900">Awal</div>
<div className="text-xs text-stone-400 uppercase tracking-wide">Banker</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white" id="contact">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Escape Now</h2>
<p className="text-stone-400 mb-12 font-light">
                Ready to rejuvenate? Fill out our booking form or contact us directly. 
                We operate 24 hours a day to serve your wellness needs.
            </p>
<div className="bg-white rounded-2xl overflow-hidden shadow-2xl">

<div className="aspect-video w-full bg-stone-100 flex items-center justify-center relative">

<div className="text-center p-8">
<p className="text-stone-900 font-serif text-xl mb-4">Online Booking Form</p>
<a className="inline-block px-8 py-3 bg-stone-900 text-white rounded-lg hover:bg-amber-900 transition-colors" href="https://fluidforms.co/embed/form?id=67bf2114a08899ee66f75ee7" target="_blank">
                            Open Booking Form
                        </a>
<p className="text-stone-500 text-xs mt-4">Powered by FluidForms</p>
</div>
</div>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-light">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-amber-500 mb-1" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<span className="block text-amber-100 font-medium">Call / WhatsApp</span>
<a className="hover:text-amber-500 transition-colors" href="tel:+2330547311626">(233) 054-731-1626</a>
<a className="hover:text-amber-500 transition-colors" href="tel:+2330202987941">(233) 020-298-7941</a>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-amber-500 mb-1" icon="solar:letter-linear" width="24"></iconify-icon>
<span className="block text-amber-100 font-medium">Email Us</span>
<a className="hover:text-amber-500 transition-colors" href="mailto:massagenubylove@gmail.com">massagenubylove@gmail.com</a>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-amber-500 mb-1" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<span className="block text-amber-100 font-medium">Location &amp; Hours</span>
<span>Accra, Ghana</span>
<span className="text-xs text-stone-500">Open 24 Hours / 7 Days</span>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 py-12 border-t border-stone-900 text-stone-500 text-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="uppercase text-lg font-serif font-medium text-stone-300">NubyLove</span>
<span className="text-[10px] tracking-widest uppercase mb-4">Massage Spa</span>
<div className="text-xs">
                    © 2023 NubyLove Massage Spa. All rights reserved.
                </div>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-2 text-xs md:text-right text-center">
<a className="hover:text-white transition-colors" href="mailto:massagenubylove@gmail.com">massagenubylove@gmail.com</a>
<a className="hover:text-white transition-colors" href="tel:+2330547311626">(233) 054-731-1626</a>
<a className="hover:text-white transition-colors" href="tel:+2330202987941">(233) 020-298-7941</a>
</div>
</div>
</footer>



    </>
  );
}
