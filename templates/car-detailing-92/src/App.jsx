import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#202022',
900: '#18181b',
950: '#09090b',
},
lime: {
400: '#a3e635',
500: '#84cc16',
}
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
      

<header className="fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="text-white text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center text-sm">DU</span>
                Detailing Unlimited
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-zinc-950 bg-lime-400 rounded-full hover:bg-lime-500 transition-colors" href="#contact">
                Book Appointment
            </a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">

<div className="absolute inset-0 z-0">
<img alt="Car Polishing" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-6">
<div className="flex text-lime-400">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-300 tracking-tight">Trusted by 500+ car owners</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Bring Your Car Back to <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-200">Showroom Shine</span>
</h1>
<p className="text-lg lg:text-xl text-zinc-400 mb-10 max-w-2xl font-medium leading-relaxed">
                    Premium mobile and studio auto detailing. We restore, protect, and transform your vehicle with meticulous attention to detail and high-end products.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm lg:text-base font-medium text-zinc-950 bg-lime-400 rounded-full hover:bg-lime-500 transition-all duration-200 hover:scale-105" href="#contact">
                        Book Now
                        <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm lg:text-base font-medium text-white bg-zinc-900 border border-zinc-700 rounded-full hover:border-lime-400 hover:text-lime-400 transition-all duration-200" href="https://wa.me/1234567890" target="_blank">
<iconify-icon className="mr-2" height="20" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        WhatsApp Now
                    </a>
</div>
<p className="mt-6 text-xs text-zinc-500 font-medium flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                    Limited slots available for this week
                </p>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Does your car look older than it is?</h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto">Normal washing only does so much. Over time, elements take a toll on your vehicle's appearance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-zinc-300">
<iconify-icon height="24" icon="solar:cloud-water-drop-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Dull Finish</h3>
<p className="text-sm text-zinc-400">UV rays and poor maintenance cause paint to lose its original gloss and depth.</p>
</div>

<div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-zinc-300">
<iconify-icon height="24" icon="solar:pen-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Swirl Marks</h3>
<p className="text-sm text-zinc-400">Improper washing leaves thousands of micro-scratches visible in the sun.</p>
</div>

<div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-zinc-300">
<iconify-icon height="24" icon="solar:sofa-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Interior Grime</h3>
<p className="text-sm text-zinc-400">Trapped dust, spills, and odors make driving less enjoyable and feel unsanitary.</p>
</div>

<div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-zinc-300">
<iconify-icon height="24" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Poor Results</h3>
<p className="text-sm text-zinc-400">Automated washes miss spots and use harsh chemicals that damage protection.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-sm font-medium text-lime-400 tracking-tight uppercase mb-3">The Detailing Unlimited Standard</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Obsessed with perfection. Driven by passion.</h3>
<p className="text-zinc-400 text-base mb-8 leading-relaxed">
                        We don't just wash cars; we elevate them. Born from a passion for automotive excellence, we use industry-leading techniques and premium products to deliver results that ordinary car washes simply cannot match. Your vehicle is an investment, and we treat it like our own.
                    </p>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-zinc-800">
<div>
<p className="text-3xl font-semibold text-white tracking-tight mb-1">1,000+</p>
<p className="text-sm text-zinc-500 font-medium">Cars Serviced</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight mb-1 flex items-center">5.0 <iconify-icon className="text-lime-400 ml-1" icon="solar:star-bold" width="20"></iconify-icon></p>
<p className="text-sm text-zinc-500 font-medium">Customer Rating</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight mb-1">8+</p>
<p className="text-sm text-zinc-500 font-medium">Years Experience</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden relative">
<img alt="Detailer at work" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
</div>

<div className="absolute -bottom-6 -left-6 w-48 h-48 bg-lime-400/20 rounded-full blur-3xl z-[-1]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Premium Services</h2>
<p className="text-zinc-400 text-lg max-w-xl">Tailored solutions to restore and protect every surface of your vehicle.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-lime-400 hover:text-lime-300 transition-colors" href="#contact">
                    View full pricing <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Exterior Detailing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Exterior Detailing</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">Deep foam wash, chemical decontamination, clay bar treatment, and a high-grade sealant applied for months of protection and gloss.</p>
<ul className="space-y-2 mb-8 text-sm text-zinc-300">
<li className="flex items-start gap-2"><iconify-icon className="text-lime-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Removes road grime &amp; tar</li>
<li className="flex items-start gap-2"><iconify-icon className="text-lime-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Cleans wheels &amp; dresses tires</li>
<li className="flex items-start gap-2"><iconify-icon className="text-lime-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Adds slick, protective layer</li>
</ul>
</div>
</div>

<div className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Interior Detailing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Interior Detailing</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">Comprehensive vacuuming, steam cleaning of all surfaces, leather conditioning, and stain extraction to make it feel brand new.</p>
<ul className="space-y-2 mb-8 text-sm text-zinc-300">
<li className="flex items-start gap-2"><iconify-icon className="text-lime-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Sanitizes all touch points</li>
<li className="flex items-start gap-2"><iconify-icon className="text-lime-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Removes embedded odors</li>
<li className="flex items-start gap-2"><iconify-icon className="text-lime-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> UV protection for plastics</li>
</ul>
</div>
</div>

<div className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-lime-500/50 transition-all duration-300 relative">
<div className="absolute top-4 right-4 bg-lime-400 text-zinc-950 text-xs font-semibold px-2 py-1 rounded-md z-10">Popular</div>
<div className="aspect-[4/3] overflow-hidden">
<img alt="Paint Correction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Paint Correction</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">Machine polishing to permanently remove swirl marks, light scratches, and oxidation, revealing a flawless mirror-like finish.</p>
<ul className="space-y-2 mb-8 text-sm text-zinc-300">
<li className="flex items-start gap-2"><iconify-icon className="text-lime-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Restores extreme gloss</li>
<li className="flex items-start gap-2"><iconify-icon className="text-lime-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Enhances paint depth &amp; clarity</li>
<li className="flex items-start gap-2"><iconify-icon className="text-lime-400 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Prep for ceramic coating</li>
</ul>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-zinc-800 border border-zinc-700 rounded-full hover:bg-zinc-700 transition-colors" href="#contact">
                    Request a Custom Quote
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900 to-zinc-900 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden border border-zinc-800 aspect-[4/3]">

<div className="absolute inset-0 flex">
<div className="w-1/2 relative overflow-hidden bg-zinc-800">
<img alt="Before" className="absolute w-[200%] max-w-none h-full object-cover filter brightness-75 contrast-75 sepia-[.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded font-medium">BEFORE</div>
</div>
<div className="w-1/2 relative overflow-hidden border-l-2 border-lime-400">
<img alt="After" className="absolute right-0 w-[200%] max-w-none h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-lime-400 text-zinc-950 text-xs px-2 py-1 rounded font-semibold">AFTER</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">From dull to <span className="text-lime-400">mirror shine.</span></h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        Witness the transformation. We don't just mask imperfections with temporary waxes; we permanently correct the clear coat to reveal the true depth and brilliance of your vehicle's paint.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-lime-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Long-lasting results</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-lime-400" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Head-turning gloss</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Why choose Detailing Unlimited?</h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-lime-400 transition-colors">
<iconify-icon className="text-zinc-300 group-hover:text-lime-400 transition-colors" icon="solar:user-id-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1">Skilled Pros</h4>
<p className="text-xs text-zinc-500">Certified &amp; trained experts</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-lime-400 transition-colors">
<iconify-icon className="text-zinc-300 group-hover:text-lime-400 transition-colors" icon="solar:bottle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1">Premium Gear</h4>
<p className="text-xs text-zinc-500">Only the best chemicals</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-lime-400 transition-colors">
<iconify-icon className="text-zinc-300 group-hover:text-lime-400 transition-colors" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1">Fine Details</h4>
<p className="text-xs text-zinc-500">We clean what others miss</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-lime-400 transition-colors">
<iconify-icon className="text-zinc-300 group-hover:text-lime-400 transition-colors" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1">Fair Pricing</h4>
<p className="text-xs text-zinc-500">Transparent, no hidden fees</p>
</div>
<div className="flex flex-col items-center text-center group col-span-2 lg:col-span-1">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-lime-400 transition-colors">
<iconify-icon className="text-zinc-300 group-hover:text-lime-400 transition-colors" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1">100% Satisfaction</h4>
<p className="text-xs text-zinc-500">Guaranteed results</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/50 border-t border-zinc-800" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">How it works</h2>
<p className="text-zinc-400 text-lg">A seamless experience from start to showroom finish.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-zinc-800 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="text-center relative">
<div className="w-16 h-16 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-full flex items-center justify-center mb-6 relative">
<span className="text-lg font-semibold text-white">1</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Book Appointment</h3>
<p className="text-sm text-zinc-400 max-w-xs mx-auto">Contact us via WhatsApp, phone, or form to secure your slot and discuss your needs.</p>
</div>

<div className="text-center relative">
<div className="w-16 h-16 mx-auto bg-zinc-950 border-2 border-lime-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(163,230,53,0.3)]">
<span className="text-lg font-semibold text-lime-400">2</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Drop-off / We Come to You</h3>
<p className="text-sm text-zinc-400 max-w-xs mx-auto">Bring your vehicle to our secure studio, or choose our mobile unit for ultimate convenience.</p>
</div>

<div className="text-center relative">
<div className="w-16 h-16 mx-auto bg-zinc-950 border-2 border-zinc-800 rounded-full flex items-center justify-center mb-6">
<span className="text-lg font-semibold text-white">3</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Drive Away Shining</h3>
<p className="text-sm text-zinc-400 max-w-xs mx-auto">Collect your vehicle transformed, protected, and looking better than the day you bought it.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Trusted by perfectionists</h2>
<div className="flex items-center gap-3">
<div className="flex text-lime-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-300">5.0 Average on Google Reviews</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50">
<div className="flex text-lime-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm italic mb-6 leading-relaxed">"Absolutely blew my mind. My 5-year-old black SUV had terrible swirl marks. When I picked it up, it looked like a black mirror. Unbelievable attention to detail."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-400">MR</div>
<div>
<p className="text-sm font-medium text-white">Michael R.</p>
<p className="text-xs text-zinc-500">Paint Correction Service</p>
</div>
</div>
</div>

<div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50">
<div className="flex text-lime-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm italic mb-6 leading-relaxed">"Bought a used car that smelled like smoke and had stains. Detailing Unlimited did a full interior deep clean and it smells completely fresh now. Worth every penny."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-400">SJ</div>
<div>
<p className="text-sm font-medium text-white">Sarah J.</p>
<p className="text-xs text-zinc-500">Interior Deep Clean</p>
</div>
</div>
</div>

<div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50">
<div className="flex text-lime-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm italic mb-6 leading-relaxed">"Professional, punctual, and passionate. They explained the whole process and didn't try to upsell me on things I didn't need. My go-to detailer from now on."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-400">DT</div>
<div>
<p className="text-sm font-medium text-white">David T.</p>
<p className="text-xs text-zinc-500">Full Detail Package</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Transparent Pricing</h2>
<p className="text-zinc-400 text-lg mb-10">Premium quality takes time. Every vehicle is different, which is why we offer baseline starting prices to set expectations.</p>
<div className="inline-flex flex-col items-center bg-zinc-950 p-8 rounded-2xl border border-zinc-800 w-full mb-8 shadow-2xl">
<p className="text-sm text-zinc-400 uppercase tracking-widest font-medium mb-2">Packages Starting From</p>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-semibold text-white tracking-tight">$149</span>
<span className="text-zinc-500 font-medium">/ vehicle</span>
</div>
<p className="text-sm text-zinc-400 mb-8 max-w-md">Final price depends on vehicle size and condition. Contact us for an exact quote tailored to your car's specific needs.</p>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-zinc-950 bg-lime-400 rounded-full hover:bg-lime-500 transition-colors" href="#contact">
                    Get a Free Quote
                </a>
</div>
<div className="flex items-center justify-center gap-2 text-sm font-medium text-lime-400 bg-lime-400/10 py-2 px-4 rounded-full inline-flex mx-auto">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                We only take 2 vehicles per day to ensure perfect results. Book early.
            </div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-zinc-950 text-center">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-lime-400/5 mix-blend-overlay"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-lime-400/10 blur-[100px] rounded-full z-[-1]"></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8">Your Car Deserves Professional Care.</h2>
<p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">Stop settling for average washes. Experience the feeling of driving a perfectly clean, glossy, and protected vehicle.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-950 bg-lime-400 rounded-full hover:bg-lime-500 transition-transform duration-200 hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.3)]" href="#contact">
<iconify-icon className="mr-2" height="22" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
                    Book Your Slot
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-zinc-900 border border-zinc-700 rounded-full hover:border-lime-400 hover:text-lime-400 transition-colors" href="https://wa.me/1234567890" target="_blank">
<iconify-icon className="mr-2" height="22" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
                    Chat on WhatsApp
                </a>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 mb-24">

<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Get in touch</h2>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-lime-400" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-500 font-medium mb-1">Call Us</p>
<a className="text-lg text-white hover:text-lime-400 transition-colors" href="tel:+1234567890">+1 (234) 567-890</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-lime-400" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-500 font-medium mb-1">Studio Location</p>
<p className="text-base text-zinc-300">123 Detailer Ave, Auto District<br/>City, State 12345</p>
<p className="text-xs text-lime-400 mt-1">*Mobile service also available</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-lime-400" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-500 font-medium mb-1">Working Hours</p>
<p className="text-base text-zinc-300">Mon - Sat: 8:00 AM - 6:00 PM<br/>Sun: Closed</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
<h3 className="text-xl font-semibold text-white mb-6">Request a Callback</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2">First Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all placeholder:text-zinc-600" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2">Last Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all placeholder:text-zinc-600" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2">Phone Number</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all placeholder:text-zinc-600" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2">Vehicle Make &amp; Model</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all placeholder:text-zinc-600" placeholder="e.g. BMW M3" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2">Service Needed</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select an option...</option>
<option value="exterior">Exterior Detail</option>
<option value="interior">Interior Detail</option>
<option value="paint_correction">Paint Correction</option>
<option value="full">Full Detail Package</option>
<option value="other">Other / Not sure</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full mt-4 bg-white text-zinc-950 text-sm font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors" type="button">
                            Submit Request
                        </button>
<p className="text-xs text-zinc-600 text-center mt-4">We usually reply within 30 minutes during working hours.</p>
</form>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-white text-base font-semibold tracking-tighter uppercase">
                    DETAILING UNLIMITED
                </div>
<p className="text-xs text-zinc-600">© 2023 Detailing Unlimited. All rights reserved.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group" href="https://wa.me/1234567890" target="_blank">
<iconify-icon icon="solar:chat-round-dots-bold" width="28"></iconify-icon>

<span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-xs font-medium text-white rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            Chat with us
        </span>
</a>

    </>
  );
}
