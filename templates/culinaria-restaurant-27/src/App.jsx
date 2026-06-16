import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon className="text-orange-400" height="20" icon="solar:chef-hat-heart-linear" width="20"></iconify-icon>
          CULINARIA
        </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#menu">
            Menu
          </a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#experience">
            Experience
          </a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#about">
            About
          </a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#private">
            Private Dining
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-white text-black text-xs font-medium px-4 py-2 rounded-full shadow-[0_4px_0_#a3a3a3] hover:bg-neutral-100 active:shadow-none active:translate-y-1 transition-all" href="#reserve">
            Book a Table
            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Delicious Food Spread" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/80 to-neutral-950"></div>
</div>

<div className="relative z-10 text-center max-w-3xl px-6 mt-16">
<div className="inline-flex items-center gap-2 border border-neutral-800 bg-neutral-900/50 backdrop-blur rounded-full px-3 py-1 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">
            New Seasonal Menu
          </span>
</div>
<h1 className="text-4xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
          Taste the essence
          <br/>
<span className="text-neutral-500">of modern purity.</span>
</h1>
<p className="text-neutral-400 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
          An immersive culinary journey blending Nordic minimalism with
          Mediterranean warmth. Crafted for the discerning palate.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black text-sm font-medium px-8 py-3 rounded-full shadow-[0_4px_0_#a3a3a3] hover:bg-neutral-100 active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2" href="#reserve">
            Reserve Now
          </a>
<a className="w-full sm:w-auto bg-neutral-800 text-white text-sm font-medium px-8 py-3 rounded-full shadow-[0_4px_0_#171717] hover:bg-neutral-700 active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2" href="#menu">
            View Menu
          </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600">
<iconify-icon height="24" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 bg-neutral-950 relative border-t border-neutral-900" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-neutral-300 group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Farm to Fork</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              We collaborate exclusively with local artisans and farmers to
              ensure every ingredient tells a story of sustainability and
              freshness.
            </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-neutral-300 group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">
<iconify-icon height="24" icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">
              Masterful Curation
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Executive Chef Elena Vos combines molecular techniques with
              traditional recipes to create textures that surprise and delight.
            </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-neutral-300 group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">
<iconify-icon height="24" icon="solar:wine-glass-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">
              Sommelier Selection
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              An award-winning cellar featuring rare vintages and biodynamic
              wines perfectly paired to elevate each course.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative" id="menu">
<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-3 block">
            The Palette
          </span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Curated Selection
          </h2>
</div>

<div className="flex justify-center gap-8 mb-12 border-b border-neutral-900 pb-4">
<button className="text-white text-sm font-medium pb-4 border-b border-orange-500 -mb-4.5">
            Starters
          </button>
<button className="text-neutral-500 hover:text-white text-sm font-medium pb-4 transition-colors">
            Mains
          </button>
<button className="text-neutral-500 hover:text-white text-sm font-medium pb-4 transition-colors">
            Desserts
          </button>
<button className="text-neutral-500 hover:text-white text-sm font-medium pb-4 transition-colors">
            Wine
          </button>
</div>

<div className="space-y-8">

<div className="group">
<div className="flex items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-white group-hover:text-orange-200 transition-colors">
                Scallop Crudo
              </h4>
<span className="flex-grow border-b border-dotted border-neutral-800 mx-4"></span>
<span className="text-sm font-medium text-neutral-300">$24</span>
</div>
<p className="text-xs text-neutral-500 font-light">
              Yuzu gel, pickled radish, coriander oil, crispy tapioca.
            </p>
</div>

<div className="group">
<div className="flex items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-white group-hover:text-orange-200 transition-colors">
                Smoked Beetroot Tartare
              </h4>
<span className="flex-grow border-b border-dotted border-neutral-800 mx-4"></span>
<span className="text-sm font-medium text-neutral-300">$21</span>
</div>
<p className="text-xs text-neutral-500 font-light">
              Horseradish cream, rye crumb, dill emulsion, cured egg yolk.
            </p>
</div>

<div className="group">
<div className="flex items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-white group-hover:text-orange-200 transition-colors">
                Wagyu Beef Carpaccio
              </h4>
<span className="flex-grow border-b border-dotted border-neutral-800 mx-4"></span>
<span className="text-sm font-medium text-neutral-300">$32</span>
</div>
<p className="text-xs text-neutral-500 font-light">
              Truffle ponzu, parmesan crisps, micro arugula, toasted sesame.
            </p>
</div>

<div className="group">
<div className="flex items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-white group-hover:text-orange-200 transition-colors">
                Charred Octopus
              </h4>
<span className="flex-grow border-b border-dotted border-neutral-800 mx-4"></span>
<span className="text-sm font-medium text-neutral-300">$28</span>
</div>
<p className="text-xs text-neutral-500 font-light">
              Romesco sauce, chorizo oil, fingerling potatoes, lemon zest.
            </p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors border-b border-neutral-800 hover:border-neutral-500 pb-0.5" href="#">
            Download Full Menu (PDF)
            <iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-orange-400 mb-6 mx-auto" height="32" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
<blockquote className="text-2xl md:text-4xl font-light text-neutral-200 tracking-tight leading-snug">
          "Cooking is an art, but all art requires
          <span className="text-white font-normal italic">knowing something</span>
          about the techniques and materials."
        </blockquote>
<cite className="block mt-6 text-sm text-neutral-500 not-italic uppercase tracking-widest font-medium">
          — Nathan Myhrvold
        </cite>
</div>
</section>

<section className="py-24 bg-neutral-950" id="reserve">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Secure Your Table
          </h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed">
            Reservations are released one month in advance. For parties larger
            than 8, please contact our private dining team directly.
          </p>
<div className="space-y-4 pt-4">
<div className="flex items-center gap-4 text-neutral-300">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
<iconify-icon className="text-neutral-400" icon="solar:phone-linear"></iconify-icon>
</div>
<span className="text-sm">+1 (555) 091-2345</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
<iconify-icon className="text-neutral-400" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-sm">reservations@culinaria.com</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
<iconify-icon className="text-neutral-400" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-sm">884 Bleeker St, New York, NY</span>
</div>
</div>
</div>

<div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-8 backdrop-blur-sm">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">
                  Date
                </label>
<div className="relative">
<input className="w-full bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-neutral-700 transition-all placeholder-neutral-600" type="date"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">
                  Guests
                </label>
<div className="relative">
<select className="w-full bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-neutral-700 transition-all appearance-none cursor-pointer">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>5+ Guests</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">
                Available Times
              </label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<div className="text-center text-xs font-medium py-2.5 rounded-lg border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-white peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">
                    6:00 PM
                  </div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="time" type="radio"/>
<div className="text-center text-xs font-medium py-2.5 rounded-lg border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-white peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">
                    7:30 PM
                  </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio"/>
<div className="text-center text-xs font-medium py-2.5 rounded-lg border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-white peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">
                    8:45 PM
                  </div>
</label>
</div>
</div>

<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">
                  Full Name
                </label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-neutral-700 transition-all placeholder-neutral-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">
                  Email
                </label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-neutral-700 transition-all placeholder-neutral-700" placeholder="john@example.com" type="email"/>
</div>
</div>

<div className="flex items-center justify-between py-2">
<span className="text-sm text-neutral-300">
                Dietary Restrictions?
              </span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
</label>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-3.5 rounded-lg shadow-[0_4px_0_#a3a3a3] hover:bg-neutral-100 active:shadow-none active:translate-y-1 transition-all" type="button">
              Confirm Reservation
            </button>
<p className="text-[10px] text-center text-neutral-500">
              By booking, you agree to our cancellation policy.
            </p>
</form>
</div>
</div>
</section>

<footer className="bg-black border-t border-neutral-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-orange-400" height="20" icon="solar:chef-hat-heart-linear" width="20"></iconify-icon>
              CULINARIA
            </a>
<p className="text-neutral-500 text-xs leading-relaxed">
              Redefining the gastronomic experience through innovation,
              tradition, and an unyielding commitment to quality.
            </p>
</div>

<div>
<h5 className="text-white text-xs font-medium uppercase tracking-wider mb-4">
              Explore
            </h5>
<ul className="space-y-3">
<li>
<a className="text-neutral-500 text-xs hover:text-white transition-colors" href="#">
                  Menu
                </a>
</li>
<li>
<a className="text-neutral-500 text-xs hover:text-white transition-colors" href="#">
                  Wine List
                </a>
</li>
<li>
<a className="text-neutral-500 text-xs hover:text-white transition-colors" href="#">
                  Private Dining
                </a>
</li>
<li>
<a className="text-neutral-500 text-xs hover:text-white transition-colors" href="#">
                  Gift Cards
                </a>
</li>
</ul>
</div>

<div>
<h5 className="text-white text-xs font-medium uppercase tracking-wider mb-4">
              Hours
            </h5>
<ul className="space-y-3">
<li className="flex justify-between text-xs text-neutral-500">
<span>Mon - Thu</span>
<span className="text-neutral-300">5pm - 10pm</span>
</li>
<li className="flex justify-between text-xs text-neutral-500">
<span>Fri - Sat</span>
<span className="text-neutral-300">5pm - 11pm</span>
</li>
<li className="flex justify-between text-xs text-neutral-500">
<span>Sunday</span>
<span className="text-neutral-300">4pm - 9pm</span>
</li>
</ul>
</div>

<div>
<h5 className="text-white text-xs font-medium uppercase tracking-wider mb-4">
              Connect
            </h5>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600">
            © 2023 Culinaria Restaurant Group. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="text-[10px] text-neutral-600 hover:text-neutral-400" href="#">
              Privacy Policy
            </a>
<a className="text-[10px] text-neutral-600 hover:text-neutral-400" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
