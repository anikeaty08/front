import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Montserrat"', 'sans-serif'],
},
colors: {
gold: {
100: '#F9F1D8',
300: '#EEDC9A',
500: '#D4AF37', // Classic Gold
600: '#B5952F',
900: '#8A7122',
},
rose: {
500: '#B76E79',
}
},
backgroundImage: {
'gradient-gold': 'linear-gradient(135deg, #F9F1D8 0%, #D4AF37 50%, #B5952F 100%)',
'gradient-dark': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))',
}
}
}
}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="font-serif text-2xl md:text-3xl text-white tracking-tight italic" href="#">
                Luxe<span className="text-gold-500">Selfie</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-lg text-zinc-300 hover:text-white transition-colors font-light" href="#home">Home</a>
<a className="text-lg text-zinc-300 hover:text-white transition-colors font-light" href="#experience">Experience</a>
<a className="text-lg text-zinc-300 hover:text-white transition-colors font-light" href="#packages">Packages</a>
<a className="text-lg text-zinc-300 hover:text-white transition-colors font-light" href="#gallery">Gallery</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-gradient-gold text-black text-lg font-medium rounded-full hover:brightness-110 transition-all transform hover:-translate-y-0.5 shadow-lg" href="#contact">
                    Book Now
                </a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Luxury Event" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
</div>

<div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-8 mt-16">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight font-medium text-shadow">
                Elevate Your Event with the <br/>
<span className="text-transparent bg-clip-text bg-gradient-gold italic pr-2">Ultimate Photo Experience</span>
</h1>
<p className="font-light text-xl md:text-2xl text-zinc-200 max-w-3xl mx-auto leading-relaxed">
                The premier open-air photo booth rental for weddings, corporate galas, and VIP parties. Capturing memories in high-definition luxury.
            </p>
<div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto px-10 py-4 bg-white text-black text-xl font-medium rounded-full hover:bg-zinc-100 transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2" href="#contact">
                    Check Availability
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-10 py-4 border border-white/30 backdrop-blur-sm text-white text-xl font-medium rounded-full hover:bg-white/10 transition-all" href="#experience">
                    View Gallery
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
<i className="w-8 h-8" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-24 md:py-32 bg-white relative" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 space-y-4">
<span className="text-gold-600 font-medium tracking-widest text-sm uppercase">Why Choose Luxe</span>
<h2 className="font-serif text-4xl md:text-6xl text-zinc-900 font-medium tracking-tight">The Red Carpet Experience</h2>
<p className="text-xl text-zinc-500 max-w-2xl mx-auto pt-4">We don't just take photos; we create studio-quality portraits instantly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="flex flex-col items-center text-center space-y-6 p-6 rounded-2xl hover:bg-zinc-50 transition-colors duration-300">
<div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-gold-500 mb-2 shadow-xl">
<i className="w-8 h-8" data-lucide="aperture"></i>
</div>
<h3 className="font-serif text-2xl text-zinc-900 font-medium">Studio Lighting</h3>
<p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Professional beauty lighting that ensures every guest looks flawless, day or night.
                    </p>
</div>

<div className="flex flex-col items-center text-center space-y-6 p-6 rounded-2xl hover:bg-zinc-50 transition-colors duration-300">
<div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-gold-500 mb-2 shadow-xl">
<i className="w-8 h-8" data-lucide="share-2"></i>
</div>
<h3 className="font-serif text-2xl text-zinc-900 font-medium">Instant Sharing</h3>
<p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Share directly to Instagram, TikTok, or via AirDrop and SMS in seconds.
                    </p>
</div>

<div className="flex flex-col items-center text-center space-y-6 p-6 rounded-2xl hover:bg-zinc-50 transition-colors duration-300">
<div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-gold-500 mb-2 shadow-xl">
<i className="w-8 h-8" data-lucide="sparkles"></i>
</div>
<h3 className="font-serif text-2xl text-zinc-900 font-medium">Glam Filter</h3>
<p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Our signature black &amp; white "Kardashian-style" smoothing filter for that VIP look.
                    </p>
</div>

<div className="flex flex-col items-center text-center space-y-6 p-6 rounded-2xl hover:bg-zinc-50 transition-colors duration-300">
<div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-gold-500 mb-2 shadow-xl">
<i className="w-8 h-8" data-lucide="printer"></i>
</div>
<h3 className="font-serif text-2xl text-zinc-900 font-medium">Custom Prints</h3>
<p className="text-lg text-zinc-500 font-light leading-relaxed">
                        High-speed, lab-quality 4x6 or photo strip prints with custom branding.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="packages">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="font-serif text-5xl md:text-6xl text-zinc-900 font-medium tracking-tight mb-6">Our Packages</h2>
<p className="text-xl text-zinc-600">Curated experiences for every occasion.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-zinc-100 flex flex-col h-full group">
<div className="h-64 overflow-hidden relative">
<img alt="Party Package" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter brightness-90" src="https://images.unsplash.com/photo-1545224144-b38cd309ef69?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="p-10 flex-1 flex flex-col">
<h3 className="font-serif text-3xl text-zinc-900 mb-2">The Party</h3>
<p className="text-gold-600 font-medium tracking-wide text-sm uppercase mb-6">2 Hour Rental</p>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                            Perfect for intimate gatherings and birthdays. Simple, stylish, and purely digital.
                        </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-lg text-zinc-700">
<i className="w-5 h-5 text-zinc-400" data-lucide="check"></i> Digital Only
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-700">
<i className="w-5 h-5 text-zinc-400" data-lucide="check"></i> Standard Backdrop
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-700">
<i className="w-5 h-5 text-zinc-400" data-lucide="check"></i> Online Gallery
                            </li>
</ul>
<a className="w-full py-4 rounded-lg border border-zinc-900 text-zinc-900 text-lg font-medium hover:bg-zinc-900 hover:text-white transition-colors text-center" href="#contact">
                            Inquire for Price
                        </a>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-2xl relative transform md:-translate-y-4 border-2 border-gold-500/30 flex flex-col h-full group">
<div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-4 py-2 rounded-bl-lg uppercase tracking-wider z-20">Most Popular</div>
<div className="h-64 overflow-hidden relative">
<img alt="Luxe Package" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&amp;w=2058&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gold-900/10 mix-blend-overlay"></div>
</div>
<div className="p-10 flex-1 flex flex-col relative">
<h3 className="font-serif text-3xl text-zinc-900 mb-2">The Luxe</h3>
<p className="text-gold-600 font-medium tracking-wide text-sm uppercase mb-6">3 Hour Rental</p>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                            Our signature experience. Includes unlimited prints and our famous Glam Filter.
                        </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-lg text-zinc-900 font-medium">
<i className="w-5 h-5 text-gold-500" data-lucide="check"></i> Unlimited 4x6 Prints
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-900 font-medium">
<i className="w-5 h-5 text-gold-500" data-lucide="check"></i> Glam "B&amp;W" Filter
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-900 font-medium">
<i className="w-5 h-5 text-gold-500" data-lucide="check"></i> Booth Attendant
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-900 font-medium">
<i className="w-5 h-5 text-gold-500" data-lucide="check"></i> Premium Backdrop
                            </li>
</ul>
<a className="w-full py-4 rounded-lg bg-zinc-900 text-white text-lg font-medium hover:bg-zinc-800 transition-colors text-center gold-glow" href="#contact">
                            Book This Package
                        </a>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-zinc-100 flex flex-col h-full group">
<div className="h-64 overflow-hidden relative">
<img alt="VIP Package" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter brightness-90 grayscale" src="https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&amp;w=2092&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="p-10 flex-1 flex flex-col">
<h3 className="font-serif text-3xl text-zinc-900 mb-2">The VIP</h3>
<p className="text-gold-600 font-medium tracking-wide text-sm uppercase mb-6">4 Hour Rental</p>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                            The full red carpet treatment for grand weddings and large scale corporate events.
                        </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-lg text-zinc-700">
<i className="w-5 h-5 text-zinc-400" data-lucide="check"></i> Red Carpet &amp; Velvet Ropes
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-700">
<i className="w-5 h-5 text-zinc-400" data-lucide="check"></i> Custom Branding/Vinyl
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-700">
<i className="w-5 h-5 text-zinc-400" data-lucide="check"></i> Luxury Flower Wall
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-700">
<i className="w-5 h-5 text-zinc-400" data-lucide="check"></i> Guest Book Station
                            </li>
</ul>
<a className="w-full py-4 rounded-lg border border-zinc-900 text-zinc-900 text-lg font-medium hover:bg-zinc-900 hover:text-white transition-colors text-center" href="#contact">
                            Inquire for Price
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl md:text-5xl text-zinc-900 font-medium tracking-tight">Captured Moments</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

<div className="aspect-[3/4] rounded-lg overflow-hidden relative group">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
</div>

<div className="aspect-[3/4] rounded-lg overflow-hidden relative group md:translate-y-8">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
</div>

<div className="aspect-[3/4] rounded-lg overflow-hidden relative group">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
</div>

<div className="aspect-[3/4] rounded-lg overflow-hidden relative group">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
</div>

<div className="aspect-[3/4] rounded-lg overflow-hidden relative group md:translate-y-8">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
</div>

<div className="aspect-[3/4] rounded-lg overflow-hidden relative group">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<i className="w-8 h-8 text-gold-500 fill-current mx-auto mb-4" data-lucide="star"></i>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">Client Love</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="bg-zinc-800/50 p-10 rounded-2xl border border-zinc-700">
<div className="flex gap-1 mb-6 text-gold-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl text-zinc-300 italic mb-8 font-serif leading-relaxed">
                        "Absolutely stunning. The glam filter made everyone look like a movie star. Best investment for our wedding!"
                    </p>
<div>
<p className="font-medium text-white text-lg">Sarah &amp; James</p>
<p className="text-zinc-500">Wedding at The Plaza</p>
</div>
</div>

<div className="bg-zinc-800/50 p-10 rounded-2xl border border-zinc-700 md:-translate-y-4 shadow-2xl shadow-black">
<div className="flex gap-1 mb-6 text-gold-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl text-zinc-300 italic mb-8 font-serif leading-relaxed">
                        "Luxe Selfie Spot was the highlight of our corporate gala. The branding options were perfect and the prints were high quality."
                    </p>
<div>
<p className="font-medium text-white text-lg">Michael Ross</p>
<p className="text-zinc-500">Marketing Director, TechCorp</p>
</div>
</div>

<div className="bg-zinc-800/50 p-10 rounded-2xl border border-zinc-700">
<div className="flex gap-1 mb-6 text-gold-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl text-zinc-300 italic mb-8 font-serif leading-relaxed">
                        "Professional, on time, and so much fun. The attendant was lovely and the setup looked very expensive."
                    </p>
<div>
<p className="font-medium text-white text-lg">Emily Blunt</p>
<p className="text-zinc-500">30th Birthday Party</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-12 border-t border-zinc-800" id="contact">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<a className="font-serif text-4xl text-white tracking-tight italic mb-8" href="#">
                Luxe<span className="text-gold-500">Selfie</span>
</a>
<p className="text-zinc-400 text-xl text-center max-w-lg mb-12 font-light">
                Ready to elevate your event? <br/> Contact us today to secure your date.
            </p>
<a className="text-2xl md:text-3xl font-serif text-white hover:text-gold-500 transition-colors border-b border-zinc-800 pb-2 mb-12" href="mailto:hello@luxeselfie.com">
                hello@luxeselfie.com
            </a>
<div className="flex gap-8 mb-16">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram"></i>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook"></i>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="twitter"></i>
</a>
</div>
<div className="flex flex-col md:flex-row justify-between items-center w-full pt-8 border-t border-zinc-900 text-zinc-600 text-sm md:text-base">
<p>© 2024 Luxe Selfie Spot. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
