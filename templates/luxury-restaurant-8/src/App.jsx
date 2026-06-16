import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center bg-[#090c0a]/80 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-[#a8b0aa]">
<a className="hover:text-[#D4AF37] transition-colors" href="#about">Philosophy</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#menu">Menu</a>
</div>
<a className="font-serif text-3xl font-medium tracking-tighter text-white" href="#">
            L'ORO
        </a>
<div className="flex items-center gap-6">
<a className="hidden md:inline-block text-xs uppercase tracking-widest border border-[#D4AF37]/30 px-6 py-2.5 rounded-full hover:bg-[#D4AF37] hover:text-[#090c0a] transition-all duration-500" href="#reservation">
                Book a Table
            </a>
<button className="md:hidden text-white flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Dark moody pizza" className="w-full h-full object-cover opacity-50 scale-105 transform origin-center transition-transform duration-[20s] hover:scale-100" src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#090c0a] via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#090c0a]/50 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 flex flex-col items-center animate-fade-up">
<span className="font-sans text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-6 block">Amsterdam · Napoli</span>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.85] mb-8">
                The Art of <br/>
<span className="italic font-light text-[#D4AF37] pr-4">Tradition</span>
</h1>
<p className="font-sans text-sm md:text-base text-[#a8b0aa] max-w-md font-light">
                Elevating the Neapolitan classic through uncompromising ingredients and masterful execution.
            </p>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-70">
<span className="text-[0.65rem] uppercase tracking-widest text-white/50">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
</div>
</header>

<section className="py-32 px-6 md:px-16 max-w-screen-2xl mx-auto relative" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-px bg-[#D4AF37]"></div>
<span className="text-xs uppercase tracking-widest text-[#D4AF37]">Our Philosophy</span>
</div>
<h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-8">
                    Rooted in heritage,<br/>crafted for the modern palate.
                </h2>
<p className="text-sm md:text-base text-[#a8b0aa] font-light leading-relaxed mb-6">
                    At L'ORO, we believe true luxury lies in simplicity and source. Our dough ferments for 72 hours, breathing life into a crust that is impossibly light yet profoundly flavorful.
                </p>
<p className="text-sm md:text-base text-[#a8b0aa] font-light leading-relaxed mb-10">
                    We import our San Marzano tomatoes, organic olive oils, and fresh mozzarella di bufala directly from artisanal producers in Campania, ensuring every bite in Amsterdam transports you to the Amalfi coast.
                </p>
<img alt="Chef Signature" className="h-12 opacity-30 invert filter" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="lg:col-span-7 relative h-[600px] w-full">

<div className="absolute right-0 top-0 w-4/5 h-[500px] overflow-hidden editorial-border">
<img alt="Restaurant Interior" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute left-0 bottom-0 w-3/5 h-[350px] overflow-hidden editorial-border shadow-2xl animate-float">
<img alt="Chef preparing dough" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">

<iconify-icon className="absolute -right-20 top-10 text-[20rem] text-white/[0.02] -rotate-45 pointer-events-none" icon="solar:leaf-linear"></iconify-icon>
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div className="order-2 md:order-1 relative p-4">
<div className="absolute inset-0 border border-[#D4AF37]/20 rounded-full scale-105 animate-[spin_60s_linear_infinite]"></div>
<img alt="Truffle Pizza" className="w-full h-auto rounded-full object-cover aspect-square shadow-2xl brightness-90 hover:brightness-100 transition-all duration-700" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 text-center md:text-left">
<span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Chef's Signature</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">Tartufo Nero</h2>
<p className="text-[#a8b0aa] font-light text-sm mb-8 max-w-md mx-auto md:mx-0">
                    A masterpiece of earthly delights. Fior di latte, wild mushroom crema, shaved fresh black truffle, and a drizzle of 24-month aged Parmigiano Reggiano reduction.
                </p>
<div className="flex items-center justify-center md:justify-start gap-2 text-[#D4AF37]">
<span className="text-lg font-serif">€ 32</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-screen-lg mx-auto" id="menu">
<div className="text-center mb-20">
<h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tighter mb-6">The Menu</h2>
<p className="text-sm text-[#a8b0aa] font-light tracking-wide uppercase">Curated Seasonal Selections</p>
</div>
<div className="space-y-24">

<div>
<h3 className="font-serif text-2xl tracking-tight text-[#D4AF37] mb-10 border-b border-white/10 pb-4">Antipasti</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-xl tracking-tight group-hover:text-[#D4AF37] transition-colors">Burrata e Fichi</h4>
<div className="grow mx-4 border-b border-dotted border-white/20"></div>
<span className="text-sm font-light">€ 18</span>
</div>
<p className="text-xs text-[#a8b0aa] font-light leading-relaxed">Apulian burrata, fresh black figs, aged balsamic, toasted pine nuts.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-xl tracking-tight group-hover:text-[#D4AF37] transition-colors">Carpaccio di Manzo</h4>
<div className="grow mx-4 border-b border-dotted border-white/20"></div>
<span className="text-sm font-light">€ 22</span>
</div>
<p className="text-xs text-[#a8b0aa] font-light leading-relaxed">Wagyu beef, truffle emulsion, pickled shimeji, crispy capers.</p>
</div>
</div>
</div>

<div>
<h3 className="font-serif text-2xl tracking-tight text-[#D4AF37] mb-10 border-b border-white/10 pb-4">Le Pizze</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-xl tracking-tight group-hover:text-[#D4AF37] transition-colors">Margherita D.O.P</h4>
<div className="grow mx-4 border-b border-dotted border-white/20"></div>
<span className="text-sm font-light">€ 20</span>
</div>
<p className="text-xs text-[#a8b0aa] font-light leading-relaxed">San Marzano DOP, mozzarella di bufala, fresh basil, organic EVOO.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-xl tracking-tight group-hover:text-[#D4AF37] transition-colors">Diavola Elegante</h4>
<div className="grow mx-4 border-b border-dotted border-white/20"></div>
<span className="text-sm font-light">€ 24</span>
</div>
<p className="text-xs text-[#a8b0aa] font-light leading-relaxed">Spicy Calabrian nduja, fior di latte, hot honey, basil.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-xl tracking-tight group-hover:text-[#D4AF37] transition-colors">Crudo e Stracciatella</h4>
<div className="grow mx-4 border-b border-dotted border-white/20"></div>
<span className="text-sm font-light">€ 28</span>
</div>
<p className="text-xs text-[#a8b0aa] font-light leading-relaxed">Yellow tomato coulis, Prosciutto di Parma 24m, stracciatella.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-xl tracking-tight group-hover:text-[#D4AF37] transition-colors">Carciofi e Guanciale</h4>
<div className="grow mx-4 border-b border-dotted border-white/20"></div>
<span className="text-sm font-light">€ 26</span>
</div>
<p className="text-xs text-[#a8b0aa] font-light leading-relaxed">Roman artichokes, crispy guanciale, pecorino romano, black pepper.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 w-full overflow-hidden">
<div className="flex w-[150vw] md:w-[120vw] gap-4 -ml-[10vw] md:-ml-[5vw]">
<img alt="Restaurant detail" className="w-1/4 h-[400px] md:h-[600px] object-cover editorial-border opacity-70 hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Wine pouring" className="w-1/4 h-[400px] md:h-[600px] object-cover editorial-border opacity-70 hover:opacity-100 transition-opacity duration-500 mt-12" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Pizza close up" className="w-1/4 h-[400px] md:h-[600px] object-cover editorial-border opacity-70 hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Ingredients" className="w-1/4 h-[400px] md:h-[600px] object-cover editorial-border opacity-70 hover:opacity-100 transition-opacity duration-500 mt-12" src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 px-6 text-center max-w-3xl mx-auto">
<iconify-icon className="text-4xl text-[#D4AF37]/30 mb-8" icon="solar:quote-left-bold"></iconify-icon>
<h3 className="font-serif text-2xl md:text-4xl tracking-tight leading-relaxed font-light italic mb-8">
            "An absolute triumph. L'ORO redefines the pizza experience, elevating a humble street food into a symphony of premium ingredients and perfect technique."
        </h3>
<p className="text-xs uppercase tracking-widest text-[#a8b0aa]">— The Culinary Review</p>
</section>

<section className="py-32 bg-surface border-t border-white/5 relative" id="reservation">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<h2 className="font-serif text-5xl md:text-6xl font-medium tracking-tighter mb-6">Reserve Your<br/>Experience</h2>
<p className="text-sm text-[#a8b0aa] font-light mb-12 max-w-sm">
                    Intimate seating is limited to ensure impeccable service. We recommend booking up to two weeks in advance.
                </p>
<div className="space-y-6 text-sm text-[#a8b0aa] font-light">
<div className="flex items-center gap-4">
<iconify-icon className="text-[#D4AF37]" icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Keizersgracht 123, 1015 CJ Amsterdam</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-[#D4AF37]" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span>Tue - Sun, 18:00 - 23:00</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-[#D4AF37]" icon="solar:phone-linear" width="20"></iconify-icon>
<span>+31 20 123 4567</span>
</div>
</div>
</div>

<form className="space-y-8 bg-[#090c0a] p-8 md:p-12 editorial-border">
<div className="grid grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-[#a8b0aa]">Date</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors text-white color-scheme-dark" type="date"/>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-[#a8b0aa]">Time</label>
<select className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors text-white custom-select">
<option value="18:00">18:00</option>
<option value="19:00">19:00</option>
<option value="20:00">20:00</option>
<option value="21:00">21:00</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-[#a8b0aa]">Guests</label>
<select className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors text-white custom-select">
<option value="2">2 People</option>
<option value="3">3 People</option>
<option value="4">4 People</option>
<option value="5">5+ People</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-[#a8b0aa]">Name</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors text-white placeholder:text-white/20" placeholder="Your full name" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-[#a8b0aa]">Special Requests</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors text-white placeholder:text-white/20" placeholder="Dietary requirements or occasions" type="text"/>
</div>
<button className="w-full bg-white text-[#090c0a] py-4 text-xs font-medium uppercase tracking-widest hover:bg-[#D4AF37] transition-colors duration-500 mt-4" type="button">
                    Confirm Request
                </button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/10 px-6">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="font-serif text-2xl font-medium tracking-tighter text-white">
                L'ORO
            </div>
<div className="flex gap-6 text-[#a8b0aa]">
<a className="hover:text-[#D4AF37] transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-[#D4AF37] transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
<div className="text-[0.65rem] uppercase tracking-widest text-[#a8b0aa]">
                © 2024 L'ORO Amsterdam. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
