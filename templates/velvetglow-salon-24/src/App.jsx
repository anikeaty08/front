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
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
},
champagne: {
100: '#FBF7F2',
200: '#F2EBE0',
900: '#4A4036',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="font-serif text-2xl tracking-tighter text-stone-900 group-hover:text-stone-600 transition-colors">VELVETGLOW</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#about">Our Story</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center justify-center px-6 py-2 bg-stone-900 text-stone-50 text-xs font-medium tracking-wide uppercase hover:bg-stone-700 transition-all rounded-full" href="#book">
                    Book Now
                </a>
<button className="md:hidden text-stone-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 mb-8">
<iconify-icon className="text-stone-800" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">Award Winning Salon</span>
</div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-stone-900 mb-6">
                    Elevate your <br/> <span className="italic font-light">natural radiance.</span>
</h1>
<p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
                    Experience luxury styling and bespoke treatments tailored to illuminate your unique beauty in a serene sanctuary.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-12 items-center justify-center px-8 bg-stone-900 text-white text-sm font-medium tracking-wide rounded-full hover:bg-stone-800 transition-transform hover:-translate-y-0.5 shadow-lg shadow-stone-200" href="#book">
                        Book Your Glow
                    </a>
<a className="inline-flex h-12 items-center justify-center px-8 bg-white border border-stone-200 text-stone-900 text-sm font-medium tracking-wide rounded-full hover:bg-stone-50 transition-colors" href="#services">
                        View Menu
                    </a>
</div>
</div>
<div className="relative order-1 lg:order-2">
<div className="aspect-[4/5] md:aspect-square relative rounded-t-[10rem] rounded-b-[2rem] overflow-hidden bg-stone-200">
<img alt="Luxury Salon Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur border border-white/50 p-4 rounded-2xl shadow-sm max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900">
<iconify-icon icon="solar:heart-angle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-serif text-stone-900">Client Favorite</p>
<p className="text-xs text-stone-500">Hydra-Glow Facial</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-stone-200/50 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900 mb-4">Curated Services</h2>
<p className="text-stone-500 font-light max-w-sm">Premium treatments designed for relaxation and rejuvenation.</p>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900 pb-1 border-b border-stone-200 hover:border-stone-900 transition-colors" href="#">
                    Download Full Menu
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-[2rem] bg-stone-50 hover:bg-white border border-stone-100 hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 cursor-default">
<div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 flex items-center justify-center text-stone-800 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:scissors-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-2">Hair Artistry</h3>
<p className="text-stone-500 text-sm font-light mb-6 leading-relaxed">Precision cuts, bespoke coloring, and restorative treatments using organic products.</p>
<div className="space-y-3">
<div className="flex justify-between text-sm items-center border-b border-stone-200/50 pb-2">
<span className="text-stone-600">Signature Cut</span>
<span className="font-medium text-stone-900">$85+</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-stone-200/50 pb-2">
<span className="text-stone-600">Balayage &amp; Tone</span>
<span className="font-medium text-stone-900">$220+</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-stone-200/50 pb-2">
<span className="text-stone-600">Gloss Treatment</span>
<span className="font-medium text-stone-900">$60</span>
</div>
</div>
</div>

<div className="group p-8 rounded-[2rem] bg-stone-50 hover:bg-white border border-stone-100 hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 cursor-default">
<div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 flex items-center justify-center text-stone-800 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:cosmetic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-2">Clinical Facials</h3>
<p className="text-stone-500 text-sm font-light mb-6 leading-relaxed">Deeply hydrating and anti-aging therapies to restore your skin's natural barrier.</p>
<div className="space-y-3">
<div className="flex justify-between text-sm items-center border-b border-stone-200/50 pb-2">
<span className="text-stone-600">The Velvet Glow</span>
<span className="font-medium text-stone-900">$150</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-stone-200/50 pb-2">
<span className="text-stone-600">Microdermabrasion</span>
<span className="font-medium text-stone-900">$180</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-stone-200/50 pb-2">
<span className="text-stone-600">LED Light Therapy</span>
<span className="font-medium text-stone-900">$55</span>
</div>
</div>
</div>

<div className="group p-8 rounded-[2rem] bg-stone-50 hover:bg-white border border-stone-100 hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 cursor-default">
<div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 flex items-center justify-center text-stone-800 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:hand-stars-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-2">Nail Lounge</h3>
<p className="text-stone-500 text-sm font-light mb-6 leading-relaxed">Meticulous manicures and pedicures in our zero-gravity massage chairs.</p>
<div className="space-y-3">
<div className="flex justify-between text-sm items-center border-b border-stone-200/50 pb-2">
<span className="text-stone-600">Gel Manicure</span>
<span className="font-medium text-stone-900">$55</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-stone-200/50 pb-2">
<span className="text-stone-600">Luxury Pedicure</span>
<span className="font-medium text-stone-900">$85</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-stone-200/50 pb-2">
<span className="text-stone-600">Nail Art (per nail)</span>
<span className="font-medium text-stone-900">$5+</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-2 block">Visual Diary</span>
<h2 className="font-serif text-4xl tracking-tight text-stone-900">Moments of Beauty</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">

<div className="relative group overflow-hidden rounded-2xl col-span-2 row-span-2">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="relative group overflow-hidden rounded-2xl">
<img alt="Products" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-2xl">
<img alt="Texture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-2xl col-span-2 md:col-span-1 md:row-span-1">
<img alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-2xl hidden md:block">
<img alt="Styling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 relative">
<div className="relative z-10 rounded-[2rem] overflow-hidden">
<img alt="About Salon" className="w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 w-full h-full border border-stone-200 rounded-[2rem] -z-0 hidden md:block"></div>
</div>
<div className="lg:w-1/2">
<h2 className="font-serif text-4xl tracking-tight text-stone-900 mb-6">A Sanctuary for <br/>Modern Elegance</h2>
<div className="space-y-6 text-stone-500 font-light leading-relaxed">
<p>
                            Founded on the belief that self-care is a necessity, not a luxury, VelvetGlow was created to be a haven from the bustling city. Our philosophy is rooted in enhancing your natural features rather than masking them.
                        </p>
<p>
                            We use only the finest, sustainably sourced products. From ammonia-free hair colors to organic botanical facials, every choice we make is designed to protect your health and the environment without compromising on results.
                        </p>
</div>
<div className="grid grid-cols-3 gap-8 mt-12 border-t border-stone-100 pt-8">
<div>
<span className="block font-serif text-3xl text-stone-900">5+</span>
<span className="text-xs text-stone-400 uppercase tracking-wide">Years Exp.</span>
</div>
<div>
<span className="block font-serif text-3xl text-stone-900">2k+</span>
<span className="text-xs text-stone-400 uppercase tracking-wide">Happy Clients</span>
</div>
<div>
<span className="block font-serif text-3xl text-stone-900">100%</span>
<span className="text-xs text-stone-400 uppercase tracking-wide">Organic</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50" id="book">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-stone-400 mb-6" icon="solar:calendar-mark-linear" width="48"></iconify-icon>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Ready to Glow?</h2>
<p className="text-stone-400 font-light mb-10 max-w-lg mx-auto">Appointments are available Monday through Saturday. Book online or message us directly for bespoke consultations.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 px-8 flex items-center justify-center bg-white text-stone-900 rounded-full font-medium text-sm hover:bg-stone-200 transition-colors" href="#">
                    Book Online Now
                </a>
<a className="w-full sm:w-auto h-12 px-8 flex items-center justify-center border border-stone-700 text-white rounded-full font-medium text-sm hover:bg-stone-800 transition-colors gap-2" href="#">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                    (555) 123-4567
                </a>
</div>
</div>
</section>

<footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-serif text-xl tracking-tighter text-stone-200 block mb-1">VELVETGLOW</span>
<p className="text-xs font-light">© 2024 VelvetGlow Salon. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="hover:text-stone-200 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-200 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-200 transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group" href="https://wa.me/">
<iconify-icon className="group-hover:hidden" icon="solar:chat-round-dots-linear" strokeWidth="2" width="28"></iconify-icon>
<span className="hidden group-hover:block font-bold text-lg">WA</span>
</a>

    </>
  );
}
