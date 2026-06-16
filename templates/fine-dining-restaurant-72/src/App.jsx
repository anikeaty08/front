import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-white text-2xl tracking-tighter" href="#" style={{fontFamily: '\'Cinzel\', serif'}}>TRB</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors" href="#story">Story</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#menu">Menu</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#atmosphere">Atmosphere</a>
</div>
</div>
<div className="flex items-center gap-6">
<a className="hidden lg:flex items-center gap-2 text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors" href="tel:+1234567890">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
<span>+1 (212) 555-0199</span>
</a>
<a className="bg-[#D4AF37] text-neutral-950 px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-white transition-colors" href="#reserve">
                    Book a Table
                </a>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[40rem] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0 bg-neutral-900">

<img alt="Chef Cooking" className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_20s_ease-in-out_infinite] blur-[2px]" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80"></div>
</div>
<div className="relative z-10 text-center flex flex-col items-center max-w-4xl px-6 mt-16">
<span className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-medium mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#D4AF37]/50"></span>
                A Symphony of Taste
                <span className="w-8 h-[1px] bg-[#D4AF37]/50"></span>
</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-8" style={{fontFamily: '\'Cinzel\', serif'}}>
                The Royal Bistro
            </h1>
<p className="text-lg text-neutral-400 max-w-2xl font-light leading-relaxed mb-10">
                Experience an unforgettable culinary journey where modern innovation meets classic elegance in the heart of the city.
            </p>
<a className="group flex items-center gap-3 text-white border border-white/20 px-8 py-4 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300" href="#reserve">
<span className="text-sm font-medium tracking-wide uppercase">Reserve Your Experience</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</header>

<section className="py-32 px-6 bg-neutral-950" id="story">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative group">
<div className="absolute inset-0 border border-[#D4AF37]/30 translate-x-6 translate-y-6 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
<img alt="Executive Chef" className="relative z-10 w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-[#D4AF37] tracking-widest uppercase text-xs font-medium mb-4">Our Heritage</span>
<h2 className="text-3xl md:text-5xl text-white tracking-tight mb-8 leading-tight" style={{fontFamily: '\'Cinzel\', serif'}}>
                    Mastery in Every Detail
                </h2>
<div className="text-neutral-400 space-y-6 font-light leading-relaxed text-sm md:text-base">
<p>
                        Founded on the principles of uncompromising quality and culinary artistry, The Royal Bistro was born from a desire to elevate the dining experience. Our executive chef, with over two decades of Michelin-starred expertise, curates a menu that respects tradition while daring to innovate.
                    </p>
<p>
                        We source only the finest seasonal ingredients, partnering directly with artisanal farmers and coastal purveyors. Every dish is a testament to our dedication—a harmonious blend of texture, aroma, and profound flavor.
                    </p>
</div>
<div className="mt-12 flex items-center gap-6">
<img alt="Signature" className="h-16 w-auto opacity-50 grayscale invert mix-blend-screen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'brightness(0) invert(1)'}}/>
<div>
<p className="text-white text-sm font-medium">Alexander Sterling</p>
<p className="text-neutral-500 text-xs mt-1">Executive Chef &amp; Founder</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900 border-y border-white/5" id="menu">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[#D4AF37] tracking-widest uppercase text-xs font-medium mb-4 block">The Selection</span>
<h2 className="text-3xl md:text-5xl text-white tracking-tight" style={{fontFamily: '\'Cinzel\', serif'}}>
                    Signature Menu
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

<div className="group flex flex-col gap-3">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 group-hover:border-[#D4AF37]/50 transition-colors">
<h3 className="text-lg text-neutral-100 tracking-tight" style={{fontFamily: '\'Cinzel\', serif'}}>A5 Japanese Wagyu</h3>
<span className="text-[#D4AF37] text-base" style={{fontFamily: '\'Cinzel\', serif'}}>$185</span>
</div>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Charcoal grilled tenderloin, smoked potato purée, charred asparagus, perigord black truffle jus.</p>
</div>

<div className="group flex flex-col gap-3">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 group-hover:border-[#D4AF37]/50 transition-colors">
<h3 className="text-lg text-neutral-100 tracking-tight" style={{fontFamily: '\'Cinzel\', serif'}}>Alba Truffle Tagliolini</h3>
<span className="text-[#D4AF37] text-base" style={{fontFamily: '\'Cinzel\', serif'}}>$95</span>
</div>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Hand-cut pasta, 36-month aged Parmigiano-Reggiano, cultured butter, shaved white truffle.</p>
</div>

<div className="group flex flex-col gap-3">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 group-hover:border-[#D4AF37]/50 transition-colors">
<h3 className="text-lg text-neutral-100 tracking-tight" style={{fontFamily: '\'Cinzel\', serif'}}>Oscietra Caviar Service</h3>
<span className="text-[#D4AF37] text-base" style={{fontFamily: '\'Cinzel\', serif'}}>$210</span>
</div>
<p className="text-xs text-neutral-400 font-light leading-relaxed">30g Royal Oscietra, traditional garnishes, warm buckwheat blinis, crème fraîche.</p>
</div>

<div className="group flex flex-col gap-3">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 group-hover:border-[#D4AF37]/50 transition-colors">
<h3 className="text-lg text-neutral-100 tracking-tight" style={{fontFamily: '\'Cinzel\', serif'}}>Maine Lobster Thermidor</h3>
<span className="text-[#D4AF37] text-base" style={{fontFamily: '\'Cinzel\', serif'}}>$115</span>
</div>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Cognac cream, gruyère crust, confit fennel, tarragon emulsion.</p>
</div>

<div className="group flex flex-col gap-3">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 group-hover:border-[#D4AF37]/50 transition-colors">
<h3 className="text-lg text-neutral-100 tracking-tight" style={{fontFamily: '\'Cinzel\', serif'}}>Wild Turbot</h3>
<span className="text-[#D4AF37] text-base" style={{fontFamily: '\'Cinzel\', serif'}}>$85</span>
</div>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Pan-roasted, champagne velouté, imperial caviar, braised leeks, samphire.</p>
</div>

<div className="group flex flex-col gap-3">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 group-hover:border-[#D4AF37]/50 transition-colors">
<h3 className="text-lg text-neutral-100 tracking-tight" style={{fontFamily: '\'Cinzel\', serif'}}>Valrhona Grand Cru</h3>
<span className="text-[#D4AF37] text-base" style={{fontFamily: '\'Cinzel\', serif'}}>$35</span>
</div>
<p className="text-xs text-neutral-400 font-light leading-relaxed">70% dark chocolate marquise, gold leaf, hazelnut praline, tonka bean ice cream.</p>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-1" href="#">
                    View Full Menu
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-950" id="atmosphere">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 overflow-hidden group">
<img alt="Premium Interior" className="w-full h-[30rem] object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden group">
<img alt="Candlelit Table" className="w-full h-[30rem] object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden group">
<img alt="Wine Pour" className="w-full h-[30rem] object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-2 overflow-hidden group">
<img alt="Plated Dish" className="w-full h-[30rem] object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900 border-t border-white/5 relative overflow-hidden" id="reserve">

<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<span className="text-[#D4AF37] tracking-widest uppercase text-xs font-medium mb-4 block">Join Us</span>
<h2 className="text-3xl md:text-5xl text-white tracking-tight mb-4" style={{fontFamily: '\'Cinzel\', serif'}}>
                Secure Your Table
            </h2>
<p className="text-neutral-400 text-sm mb-12 font-light">Reservations are highly recommended. For parties larger than 6, please contact us directly.</p>
<form className="bg-neutral-950/50 p-8 md:p-12 border border-white/10 backdrop-blur-sm text-left grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-neutral-400 uppercase tracking-widest">Date</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:calendar-linear"></iconify-icon>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm focus:border-[#D4AF37] focus:ring-0 px-4 py-3 pl-11 transition-colors outline-none custom-date-picker" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 uppercase tracking-widest">Time</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:clock-circle-linear"></iconify-icon>
<select className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm focus:border-[#D4AF37] focus:ring-0 px-4 py-3 pl-11 transition-colors outline-none appearance-none">
<option disabled="" selected="" value="">Select Time</option>
<option>18:00</option>
<option>18:30</option>
<option>19:00</option>
<option>19:30</option>
<option>20:00</option>
<option>20:30</option>
<option>21:00</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2 md:col-span-2">
<label className="text-xs text-neutral-400 uppercase tracking-widest">Guests</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:users-group-rounded-linear"></iconify-icon>
<select className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm focus:border-[#D4AF37] focus:ring-0 px-4 py-3 pl-11 transition-colors outline-none appearance-none">
<option value="1">1 Person</option>
<option selected="" value="2">2 People</option>
<option value="3">3 People</option>
<option value="4">4 People</option>
<option value="5">5 People</option>
<option value="6">6 People</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 uppercase tracking-widest">Full Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm focus:border-[#D4AF37] focus:ring-0 px-4 py-3 transition-colors outline-none placeholder:text-neutral-600" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 uppercase tracking-widest">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm focus:border-[#D4AF37] focus:ring-0 px-4 py-3 transition-colors outline-none placeholder:text-neutral-600" placeholder="john@example.com" type="email"/>
</div>
<div className="md:col-span-2 mt-4">
<button className="w-full bg-[#D4AF37] text-neutral-950 font-medium py-4 text-sm tracking-wide hover:bg-white transition-colors flex justify-center items-center gap-2" type="button">
                        Confirm Reservation
                        <iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</button>
</div>
<style>
                    /* Customizing default date picker icon for better dark theme integration */
                    ::-webkit-calendar-picker-indicator {
                        filter: invert(1);
                        opacity: 0.5;
                        cursor: pointer;
                    }
                </style>
</form>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

<div className="flex flex-col">
<a className="text-white text-3xl tracking-tighter mb-6" href="#" style={{fontFamily: '\'Cinzel\', serif'}}>TRB</a>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                    A pinnacle of fine dining. Where every dish tells a story and every evening becomes a cherished memory.
                </p>
<div className="space-y-3 text-sm text-neutral-300">
<p className="flex items-center gap-3"><iconify-icon className="text-[#D4AF37]" icon="solar:map-point-linear"></iconify-icon> 150 Central Park South, NY 10019</p>
<p className="flex items-center gap-3"><iconify-icon className="text-[#D4AF37]" icon="solar:phone-linear"></iconify-icon> +1 (212) 555-0199</p>
<p className="flex items-center gap-3"><iconify-icon className="text-[#D4AF37]" icon="solar:letter-linear"></iconify-icon> reservations@royalbistro.com</p>
</div>
</div>

<div className="flex flex-col">
<h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Hours of Service</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li className="flex justify-between border-b border-neutral-800 pb-2">
<span>Monday - Thursday</span>
<span>17:00 - 22:30</span>
</li>
<li className="flex justify-between border-b border-neutral-800 pb-2">
<span>Friday - Saturday</span>
<span>17:00 - 23:30</span>
</li>
<li className="flex justify-between border-b border-neutral-800 pb-2">
<span>Sunday</span>
<span>16:00 - 21:30</span>
</li>
</ul>
</div>

<div className="flex flex-col">
<h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Follow Our Journey</h4>
<div className="grid grid-cols-2 gap-2">
<a className="relative group overflow-hidden block aspect-square" href="#">
<div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:camera-linear"></iconify-icon>
</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</a>
<a className="relative group overflow-hidden block aspect-square" href="#">
<div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:camera-linear"></iconify-icon>
</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</a>
<a className="relative group overflow-hidden block aspect-square" href="#">
<div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:camera-linear"></iconify-icon>
</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</a>
<a className="relative group overflow-hidden block aspect-square" href="#">
<div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:camera-linear"></iconify-icon>
</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</a>
</div>
</div>

<div className="flex flex-col">
<h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Location</h4>
<div className="relative w-full h-full min-h-[12rem] bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden group cursor-pointer">

<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=600&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-neutral-950/80 backdrop-blur border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-xs text-white font-medium uppercase tracking-widest bg-neutral-950/80 px-3 py-1 backdrop-blur">View Map</span>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-800/50 text-xs text-neutral-500 font-light">
<p>© 2024 The Royal Bistro. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
