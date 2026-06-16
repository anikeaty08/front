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
stone: {
850: '#1c1917',
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden p-2 text-stone-600 hover:text-stone-900">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-2xl font-serif font-medium tracking-tighter uppercase z-50" href="#">
                Éclat
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#atelier">The Atelier</a>
<a className="hover:text-stone-900 transition-colors" href="#stylists">Artisans</a>
<a className="hover:text-stone-900 transition-colors" href="#journal">Journal</a>
</div>

<div className="hidden md:block">
<a className="group relative inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest px-6 py-3 border border-stone-200 rounded-full hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300" href="#book">
<span>Book Appointment</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-300" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<button className="md:hidden p-2 text-stone-600">
<iconify-icon height="24" icon="lucide:calendar" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-stone-200/60 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white shadow-sm">
<span className="w-2 h-2 rounded-full bg-stone-400"></span>
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Paris • New York • Tokyo</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.05] text-stone-900">
                    Curating beauty <br/> <i className="font-serif font-normal text-stone-400">through</i> precision.
                </h1>
<p className="text-stone-500 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                    An uncompromising approach to hair care. We blend architectural structure with organic movement to reveal your most authentic self.
                </p>
<div className="pt-4 flex flex-col sm:flex-row gap-4">
<button className="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200/50">
                        Reserve a Suite
                    </button>
<button className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors">
<iconify-icon height="18" icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                        Watch the Film
                    </button>
</div>
</div>
<div className="md:col-span-5 relative">
<div className="aspect-[4/5] w-full rounded-none md:rounded-lg overflow-hidden relative group">
<img alt="Salon Interior" className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700 ease-out grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-none md:rounded-lg"></div>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 border border-stone-100 shadow-xl shadow-stone-200/50 hidden md:block max-w-xs">
<div className="flex items-start gap-4">
<div className="bg-stone-50 p-3 rounded-full">
<iconify-icon className="text-stone-900" height="20" icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-serif font-medium text-stone-900">Organic Chemistry</p>
<p className="text-xs text-stone-500 mt-1 leading-relaxed">We utilize only 100% botanical compounds for coloring and treatments.</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-b border-stone-200/60 py-10 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-stone-400 uppercase tracking-widest mb-8">As seen in</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">

<span className="font-serif text-2xl italic font-bold">Vogue</span>
<span className="font-serif text-2xl font-bold tracking-widest">ELLE</span>
<span className="font-sans text-2xl font-bold tracking-tight">Harpers BAZAAR</span>
<span className="font-serif text-2xl font-bold">Vanity Fair</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#FAFAF9]" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-900 mb-3">Service Menu</h2>
<p className="text-stone-500 font-light">Bespoke treatments tailored to your hair's unique architecture.</p>
</div>
<a className="text-sm font-medium border-b border-stone-300 pb-0.5 hover:border-stone-900 hover:text-stone-900 transition-colors self-start md:self-auto" href="#">Download Full PDF</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group">
<div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 relative">
<img alt="Cut" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300"></div>
</div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-stone-400" height="20" icon="lucide:scissors" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-stone-900">Cut &amp; Style</h3>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group/item cursor-pointer">
<span className="text-stone-600 text-sm group-hover/item:text-stone-900 transition-colors">Director Cut</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-sm font-medium">$150</span>
</li>
<li className="flex justify-between items-baseline group/item cursor-pointer">
<span className="text-stone-600 text-sm group-hover/item:text-stone-900 transition-colors">Senior Stylist Cut</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-sm font-medium">$110</span>
</li>
<li className="flex justify-between items-baseline group/item cursor-pointer">
<span className="text-stone-600 text-sm group-hover/item:text-stone-900 transition-colors">Blowout &amp; Finish</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-sm font-medium">$65</span>
</li>
</ul>
</div>

<div className="group">
<div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 relative">
<img alt="Color" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300"></div>
</div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-stone-400" height="20" icon="lucide:palette" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-stone-900">Color</h3>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group/item cursor-pointer">
<span className="text-stone-600 text-sm group-hover/item:text-stone-900 transition-colors">Balayage</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-sm font-medium">$280+</span>
</li>
<li className="flex justify-between items-baseline group/item cursor-pointer">
<span className="text-stone-600 text-sm group-hover/item:text-stone-900 transition-colors">Full Highlights</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-sm font-medium">$240+</span>
</li>
<li className="flex justify-between items-baseline group/item cursor-pointer">
<span className="text-stone-600 text-sm group-hover/item:text-stone-900 transition-colors">Gloss &amp; Toner</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-sm font-medium">$80</span>
</li>
</ul>
</div>

<div className="group">
<div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 relative">
<img alt="Treatments" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300"></div>
</div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-stone-400" height="20" icon="lucide:droplets" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-stone-900">Treatments</h3>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group/item cursor-pointer">
<span className="text-stone-600 text-sm group-hover/item:text-stone-900 transition-colors">Keratin Complex</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-sm font-medium">$350</span>
</li>
<li className="flex justify-between items-baseline group/item cursor-pointer">
<span className="text-stone-600 text-sm group-hover/item:text-stone-900 transition-colors">Scalp Detox</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-sm font-medium">$95</span>
</li>
<li className="flex justify-between items-baseline group/item cursor-pointer">
<span className="text-stone-600 text-sm group-hover/item:text-stone-900 transition-colors">Hydration Mask</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-sm font-medium">$55</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-900">
                        Sanctuary for the Senses
                    </h2>
<p className="text-stone-500 font-light leading-relaxed">
                        We believe a salon visit should be a restorative experience. Our atelier is designed with acoustic dampening, natural light filtration, and private suites to ensure your time with us is undisturbed.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-stone-800" height="20" icon="lucide:coffee" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Curated Refreshments</h4>
<p className="text-sm text-stone-500 mt-1">Artisanal teas, espresso, and seasonal sparkling wines.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-stone-800" height="20" icon="lucide:wifi" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Seamless Connectivity</h4>
<p className="text-sm text-stone-500 mt-1">High-speed fiber optic wifi and integrated charging in every chair.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-stone-800" height="20" icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Private Consultation</h4>
<p className="text-sm text-stone-500 mt-1">Every appointment begins with a 15-minute undisturbed analysis.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Interior Detail" className="rounded-sm object-cover h-64 w-full translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Product Detail" className="rounded-sm object-cover h-64 w-full" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAF9]" id="stylists">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-900 mb-4">The Artisans</h2>
<p className="text-stone-500 font-light">
                    Our team is composed of industry leaders, educators, and visionaries dedicated to the craft of hairdressing.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-4 rounded-sm">
<img alt="Stylist" className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-base font-medium text-stone-900">Elena V.</h3>
<p className="text-xs text-stone-500 uppercase tracking-wide mt-1">Creative Director</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-4 rounded-sm">
<img alt="Stylist" className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-base font-medium text-stone-900">Julian R.</h3>
<p className="text-xs text-stone-500 uppercase tracking-wide mt-1">Senior Colorist</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-4 rounded-sm">
<img alt="Stylist" className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-base font-medium text-stone-900">Sarah M.</h3>
<p className="text-xs text-stone-500 uppercase tracking-wide mt-1">Master Stylist</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-4 rounded-sm">
<img alt="Stylist" className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-base font-medium text-stone-900">David K.</h3>
<p className="text-xs text-stone-500 uppercase tracking-wide mt-1">Texture Specialist</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50" id="book">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-stone-400 mb-6" height="32" icon="lucide:calendar-check" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6 text-white">
                Begin your transformation
            </h2>
<p className="text-stone-400 mb-10 font-light text-lg">
                Appointments are released on the 1st of every month. Join our priority list for early access to senior stylist schedules.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
<div className="relative flex-grow">
<input className="w-full bg-stone-800 border border-stone-700 text-white px-4 py-3 rounded-md placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:border-transparent transition-all text-sm" placeholder="email@address.com" type="email"/>
</div>
<button className="bg-white text-stone-900 px-6 py-3 rounded-md font-medium text-sm hover:bg-stone-200 transition-colors whitespace-nowrap" type="button">
                    Join Waitlist
                </button>
</form>
<p className="mt-6 text-xs text-stone-600">
                Or call our concierge directly at <span className="text-stone-400">+1 (212) 555-0199</span>
</p>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-serif font-medium tracking-tighter uppercase block mb-6" href="#">Éclat</a>
<p className="text-sm text-stone-500 mb-4">
                        142 Greene Street<br/>
                        SoHo, New York, NY 10012
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:facebook" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-stone-900 mb-6">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-stone-900 mb-6">Support</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Gift Cards</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Cancellation Policy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-stone-900 mb-6">Hours</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li className="flex justify-between"><span>Mon - Fri</span> <span>9am - 8pm</span></li>
<li className="flex justify-between"><span>Saturday</span> <span>10am - 6pm</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2023 Éclat Salon. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600" href="#">Privacy</a>
<a className="hover:text-stone-600" href="#">Terms</a>
<a className="hover:text-stone-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
