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
},
colors: {
zinc: {
850: '#1f2023',
950: '#0c0c0e',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tight uppercase flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-zinc-900 rounded-full"></div>
                Playa Coronado
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-600 tracking-wide uppercase">
<a className="hover:text-zinc-900 transition-colors" href="#overview">Overview</a>
<a className="hover:text-zinc-900 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-zinc-900 transition-colors" href="#video">Tour</a>
<a className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors" href="#contact">Inquire</a>
</div>

<button className="md:hidden text-zinc-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen min-h-[700px] w-full overflow-hidden bg-zinc-100" id="overview">

<div className="absolute inset-0">
<img alt="Coronado Beach Estate" className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]" onload="this.style.transform='scale(1)'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{animation: 'none', transition: 'transform 10s ease-out'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
</div>
<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
<div className="max-w-3xl fade-up">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium rounded-full uppercase tracking-wider">For Sale</span>
<span className="flex items-center gap-1 text-white/90 text-xs font-medium tracking-wide uppercase">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="14"></iconify-icon>
                        Chame, Panama
                    </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-6">
                    Coronado <br/> Beach Estate.
                </h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                    A renovated 7-casita cash-flow property. An established, turnkey business with consistent demand in a prime location.
                </p>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
<div className="flex flex-col fade-up delay-100">
<span className="text-xs uppercase tracking-widest text-white/50 mb-1">List Price</span>
<span className="text-xl md:text-2xl font-normal tracking-tight">$849,900</span>
</div>
<div className="flex flex-col fade-up delay-200">
<span className="text-xs uppercase tracking-widest text-white/50 mb-1">Bedrooms</span>
<span className="text-xl md:text-2xl font-normal tracking-tight flex items-center gap-2">
                        7 <iconify-icon className="text-white/60" icon="lucide:bed" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</div>
<div className="flex flex-col fade-up delay-300">
<span className="text-xs uppercase tracking-widest text-white/50 mb-1">Bathrooms</span>
<span className="text-xl md:text-2xl font-normal tracking-tight flex items-center gap-2">
                        7 <iconify-icon className="text-white/60" icon="lucide:bath" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</div>
<div className="flex flex-col fade-up delay-300">
<span className="text-xs uppercase tracking-widest text-white/50 mb-1">Lot Size</span>
<span className="text-xl md:text-2xl font-normal tracking-tight">1,500 m²</span>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-8">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Property Highlights</h2>
<div className="prose prose-zinc prose-lg text-zinc-600 font-light leading-relaxed">
<p className="mb-6">
                        Listed at $849,900, this renovated 7-Casita property offers a rare combination of luxury living and immediate cash flow. Located in the heart of Coronado Beach, this 1,500 square meter estate has an 18-year operating rental history.
                    </p>
<p className="mb-6">
                        Designed for short-term rentals, each residence features a full kitchen, air conditioning, and high-speed internet. The property was thoughtfully upgraded in 2025, ensuring it is move-in and rental ready.
                    </p>
<p>
                        Included in the sale is a 2025 GAC SUV and post-sale support, making this a truly turnkey investment opportunity. Just bring your suitcase.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 py-8 border-y border-zinc-100 mb-16">
<div className="flex items-start gap-3">
<div className="mt-1 text-zinc-900"><iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon></div>
<span className="text-sm text-zinc-700">7 fully equipped residences</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-zinc-900"><iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon></div>
<span className="text-sm text-zinc-700">Full kitchens in every unit</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-zinc-900"><iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon></div>
<span className="text-sm text-zinc-700">18-year rental history</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-zinc-900"><iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon></div>
<span className="text-sm text-zinc-700">2025 Upgrades completed</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-zinc-900"><iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon></div>
<span className="text-sm text-zinc-700">AC &amp; High-speed Internet</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-zinc-900"><iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon></div>
<span className="text-sm text-zinc-700">2025 GAC SUV included</span>
</div>
</div>

<div className="mb-16" id="video">
<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">Cinematic Tour</h3>
<div className="relative w-full aspect-video bg-zinc-100 rounded-sm overflow-hidden border border-zinc-100">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/9VRko8wANVY?rel=0&amp;modestbranding=1" title="Property Video"></iframe>
</div>
</div>
</div>

<aside className="lg:col-span-4 space-y-8">
<div className="sticky top-24">
<div className="p-8 bg-zinc-50 border border-zinc-100 rounded-2xl">
<div className="flex items-center gap-4 mb-6">
<img alt="Sarah Booth" className="w-16 h-16 rounded-full object-cover border border-zinc-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Sarah Booth</h3>
<p className="text-xs uppercase tracking-wide text-zinc-500">Listing Agent</p>
</div>
</div>
<div className="space-y-4 mb-8">
<a className="flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-lg text-sm hover:border-zinc-400 transition-colors group" href="tel:+50766711444">
<span className="text-zinc-600 group-hover:text-zinc-900">+507 6671-1444</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:phone" strokeWidth="1.5"></iconify-icon>
</a>
<a className="flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-lg text-sm hover:border-zinc-400 transition-colors group" href="http://www.panamasarah.com" target="_blank">
<span className="text-zinc-600 group-hover:text-zinc-900">panamasarah.com</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:globe" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="space-y-4" id="contact">
<div className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">Request Information</div>
<input className="w-full bg-transparent border-b border-zinc-300 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400" placeholder="Your Name" type="text"/>
<input className="w-full bg-transparent border-b border-zinc-300 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400" placeholder="Email Address" type="email"/>
<input className="w-full bg-transparent border-b border-zinc-300 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400" placeholder="Phone (Optional)" type="tel"/>
<button className="w-full mt-4 bg-zinc-900 text-white py-4 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                            Send Message <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="mt-8">
<a className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="/view/flyer.asp?s=2721526&amp;m=438" target="_blank">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="18"></iconify-icon>
                        Download Property Flyer
                    </a>
</div>
</div>
</aside>
</main>

<section className="bg-zinc-50 py-20 md:py-32 border-t border-zinc-200" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">The Residence</h2>
<p className="text-zinc-500 font-light">Explore the casitas, grounds, and interiors.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium border border-zinc-200 px-4 py-2 rounded-full hover:bg-white transition-colors">
                    View All Photos <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-xl">
<img alt="Pool Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-zinc-200">
<img alt="Interior Living" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>

<div className="group relative overflow-hidden rounded-xl bg-zinc-200">
<img alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>

<div className="group relative overflow-hidden rounded-xl bg-zinc-200">
<img alt="Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-zinc-200">
<img alt="Exterior Night" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<button className="md:hidden w-full mt-6 flex items-center justify-center gap-2 text-sm font-medium border border-zinc-200 px-4 py-3 rounded-lg hover:bg-white transition-colors">
                View All Photos
            </button>
</div>
</section>

<section className="relative h-[500px] w-full bg-zinc-800 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-40">

<img alt="Map Location" className="w-full h-full object-cover grayscale invert contrast-125 mix-blend-overlay" src="https://media.realestatephotospanama.com/_r/2721526_6170_1200_630_819675280"/>
</div>
<div className="relative z-10 text-center">
<h2 className="text-3xl text-white font-medium tracking-tight mb-2">Coronado Beach</h2>
<p className="text-zinc-400 text-sm uppercase tracking-widest mb-8">Chame, Panama</p>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors" href="https://maps.google.com/?q=8.53039,-79.88892" target="_blank">
<iconify-icon icon="lucide:map" width="16"></iconify-icon>
                Open in Maps
            </a>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-white text-lg font-semibold tracking-tight uppercase flex items-center gap-2 mb-6" href="#">
<div className="w-4 h-4 bg-white rounded-full"></div>
                        Playa Coronado
                    </a>
<p className="font-light text-sm leading-relaxed max-w-sm text-zinc-500">
                        A unique investment opportunity in one of Panama's most sought-after beach communities.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Contact</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Sarah Booth</a></li>
<li><a className="hover:text-white transition-colors" href="tel:+50766711444">+507 6671-1444</a></li>
<li><a className="hover:text-white transition-colors" href="mailto:info@panamasarah.com">info@panamasarah.com</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Social</h4>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="https://www.facebook.com/panamasarahbooth">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="https://www.youtube.com/@panamasarah/videos">
<iconify-icon icon="lucide:youtube" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-medium">
<p>© 2026 Real Estate Photos Panama. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
