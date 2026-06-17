import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Reveal on scroll
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            var windowHeight = window.innerHeight;
            var elementVisible = 150;

            for (var i = 0; i < reveals.length; i++) {
                var elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-serif text-[#F5F5F0] tracking-tight hover:text-[#C5A059] transition-colors" href="#">
                Koshu Club
            </a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#C5A059] transition-colors" href="#concept">Concept</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#C5A059] transition-colors" href="#menu">Menu</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#C5A059] transition-colors" href="#experience">Experience</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#C5A059] transition-colors" href="#team">Team</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#C5A059] transition-colors" href="#contact">Contact</a>
</div>
<button className="bg-transparent border border-[#C5A059] text-[#C5A059] px-5 py-2 rounded-sm text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#121212] transition-all">
                Reserve
            </button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Intimate Dining Mood" className="w-full h-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8 mt-12">
<h1 className="text-5xl md:text-7xl font-serif text-[#F5F5F0] tracking-tight leading-none reveal">
                Shōwa-Era Japanese <br/> <span className="text-[#C5A059] italic">Supper Club</span> in Buckhead
            </h1>
<p className="text-lg md:text-xl text-neutral-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed reveal" style={{transitionDelay: '100ms'}}>
                An intimate, 40-seat restaurant from the Michelin-starred Mujo team, inspired by Japan’s mid-century supper clubs.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 reveal" style={{transitionDelay: '200ms'}}>
<button className="bg-[#9A3B3B] text-white px-8 py-3.5 rounded-sm text-sm font-medium uppercase tracking-widest hover:bg-[#823232] transition-colors min-w-[180px]">
                    Book a Table
                </button>
<button className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-sm text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-[#121212] transition-colors min-w-[180px]">
                    Join the Opening List
                </button>
</div>
<p className="text-sm text-neutral-500 reveal" style={{transitionDelay: '300ms'}}>
                A new concept from Castellucci Hospitality Group and Chef J. Trent Harris.<br/>
                Opening early 2026 at 99 West Paces Ferry Rd NW.
            </p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse opacity-50">
<span className="iconify text-white" data-icon="lucide:arrow-down" data-width="24"></span>
</div>
</header>

<section className="py-24 bg-[#18181b] border-t border-white/5" id="concept">
<div className="max-w-4xl mx-auto px-6 text-center space-y-12">
<div className="reveal">
<span className="text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Story</span>
<h2 className="text-3xl md:text-4xl font-serif text-[#F5F5F0] tracking-tight">From Mujo to Koshu Club</h2>
</div>
<div className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg reveal" style={{transitionDelay: '100ms'}}>
<p>
                    Koshu Club represents the next evolution for Chef J. Trent Harris and Castellucci Hospitality Group, building upon the foundation of excellence established at the one-Michelin-star Mujo in Atlanta.
                </p>
<p>
                    Inspired by the nostalgic warmth of Shōwa-era Japan and the convivial atmosphere of Western-style supper clubs, Koshu Club merges <em>yoshoku</em> comfort dishes—like omurice, karaage, and tonkatsu—with traditional <em>washoku</em> principles and a dedicated focus on charcoal-grilled sumibiyaki proteins.
                </p>
<p>
                    Distinct from the omakase format, this 40-seat venue offers an a la carte menu designed for regulars, industry friends, and Buckhead locals seeking a sophisticated yet relaxed sanctuary.
                </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5 reveal" style={{transitionDelay: '200ms'}}>
<div className="flex flex-col items-center gap-3">
<span className="iconify text-[#C5A059]" data-icon="lucide:armchair" data-strokeWidth="1.5" data-width="28"></span>
<span className="text-sm uppercase tracking-wider text-neutral-300">40 Seats</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="iconify text-[#C5A059]" data-icon="lucide:utensils" data-strokeWidth="1.5" data-width="28"></span>
<span className="text-sm uppercase tracking-wider text-neutral-300">A La Carte</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="iconify text-[#C5A059]" data-icon="lucide:flame" data-strokeWidth="1.5" data-width="28"></span>
<span className="text-sm uppercase tracking-wider text-neutral-300">Sumibiyaki Grill</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="iconify text-[#C5A059]" data-icon="lucide:wine" data-strokeWidth="1.5" data-width="28"></span>
<span className="text-sm uppercase tracking-wider text-neutral-300">Sake &amp; Wine</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#121212] relative" id="menu">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#9A3B3B] opacity-5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-[#9A3B3B] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Culinary Direction</span>
<h2 className="text-3xl md:text-4xl font-serif text-[#F5F5F0] tracking-tight mb-6">A Concise, Charcoal-Driven Menu</h2>
<p className="text-neutral-400 max-w-2xl mx-auto font-light">
                    A focused offering of approximately 14 dishes, evoking the spirit of a micro-steakhouse imbued with precise Japanese flavor and technique.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-12 border-t border-b border-white/5 py-12 reveal" style={{transitionDelay: '100ms'}}>

<div className="space-y-6">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-[#C5A059]" data-icon="lucide:flame" data-width="20"></span>
<h3 className="text-xl font-serif text-[#C5A059]">Sumibiyaki</h3>
</div>
<ul className="space-y-4">
<li className="group">
<span className="block text-[#F5F5F0] font-medium mb-1">Charcoal-Grilled Steak Cuts</span>
<span className="text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">Selection of premium wagyu &amp; local beef</span>
</li>
<li className="group">
<span className="block text-[#F5F5F0] font-medium mb-1">Grilled Seasonal Fish</span>
<span className="text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">Whole fish or fillet, sea salt, citrus</span>
</li>
<li className="group">
<span className="block text-[#F5F5F0] font-medium mb-1">Binchōtan-Roasted Vegetables</span>
<span className="text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">Seasonal produce, miso glaze</span>
</li>
</ul>
</div>

<div className="space-y-6 md:border-l md:border-r border-white/5 md:px-8">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-[#C5A059]" data-icon="lucide:chef-hat" data-width="20"></span>
<h3 className="text-xl font-serif text-[#C5A059]">Yoshoku Plates</h3>
</div>
<ul className="space-y-4">
<li className="group">
<span className="block text-[#F5F5F0] font-medium mb-1">Omurice</span>
<span className="text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">Chicken fried rice, soft omelette, demi-glace</span>
</li>
<li className="group">
<span className="block text-[#F5F5F0] font-medium mb-1">Karaage</span>
<span className="text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">Japanese fried chicken, lemon, kewpie</span>
</li>
<li className="group">
<span className="block text-[#F5F5F0] font-medium mb-1">Korokke</span>
<span className="text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">Creamy potato &amp; crab croquettes</span>
</li>
</ul>
</div>

<div className="space-y-6">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-[#C5A059]" data-icon="lucide:fish" data-width="20"></span>
<h3 className="text-xl font-serif text-[#C5A059]">Washoku &amp; Snacks</h3>
</div>
<ul className="space-y-4">
<li className="group">
<span className="block text-[#F5F5F0] font-medium mb-1">Seasonal Sashimi</span>
<span className="text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">Chef's daily selection, aged soy</span>
</li>
<li className="group">
<span className="block text-[#F5F5F0] font-medium mb-1">Tsukemono</span>
<span className="text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">House-made pickled and marinated vegetables</span>
</li>
<li className="group">
<span className="block text-[#F5F5F0] font-medium mb-1">Rice &amp; Miso</span>
<span className="text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">Koshihikari rice, red miso soup</span>
</li>
</ul>
</div>
</div>
<p className="text-center text-xs text-neutral-600 mt-8 tracking-wide italic reveal">Menus will evolve with the seasons leading up to opening.</p>
</div>
</section>

<section className="py-24 bg-[#1a1a1a]" id="experience">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 reveal">
<span className="text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">Atmosphere</span>
<h2 className="text-3xl md:text-4xl font-serif text-[#F5F5F0] tracking-tight">A Mid-Century Japanese Room in Buckhead</h2>
<div className="h-px w-12 bg-[#9A3B3B]"></div>
<p className="text-neutral-400 font-light leading-relaxed">
                    Designed with mid-century Japanese inspiration, the room features dim lighting, rich dark woods, an intimate bar, and seating arrangements curated for both romantic date nights and late-night gatherings.
                </p>
<p className="text-neutral-400 font-light leading-relaxed">
                    The “club” in Koshu Club is a nod to the Western-style supper clubs of a bygone era—places where guests linger over drinks, engage in deep conversation, and lose track of time.
                </p>
</div>
<div className="bg-[#121212] p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl reveal" style={{transitionDelay: '100ms'}}>
<h3 className="text-xl font-serif text-[#C5A059] mb-6">Experience Highlights</h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<span className="iconify text-[#9A3B3B] mt-1" data-icon="lucide:star" data-width="18"></span>
<span className="text-neutral-300 font-light">High-touch, relaxed service focused on hospitality</span>
</li>
<li className="flex items-start gap-4">
<span className="iconify text-[#9A3B3B] mt-1" data-icon="lucide:armchair" data-width="18"></span>
<span className="text-neutral-300 font-light">Intimate 40-seat dining room</span>
</li>
<li className="flex items-start gap-4">
<span className="iconify text-[#9A3B3B] mt-1" data-icon="lucide:martini" data-width="18"></span>
<span className="text-neutral-300 font-light">Lively bar with Japanese whisky and craft cocktails</span>
</li>
<li className="flex items-start gap-4">
<span className="iconify text-[#9A3B3B] mt-1" data-icon="lucide:wine" data-width="18"></span>
<span className="text-neutral-300 font-light">Deep sake selection and global wine cellar</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#121212] border-t border-white/5" id="reservations">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8 reveal">
<h2 className="text-3xl md:text-4xl font-serif text-[#F5F5F0] tracking-tight">Reservations &amp; Opening Timeline</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                Koshu Club is opening in <strong>early 2026</strong> in Buckhead at 99 W Paces Ferry Rd NW.
            </p>
<p className="text-sm text-neutral-500">
                Reservations will be required for most seatings, with limited bar seats available for walk-ins.
            </p>
<div className="pt-6 space-y-4">
<button className="bg-[#C5A059] text-[#121212] px-10 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-[#b08d4e] transition-colors w-full md:w-auto min-w-[200px] opacity-70 cursor-not-allowed" title="Coming Soon">
                    Book a Table (Coming Soon)
                </button>
<div className="block"></div>
<a className="inline-block text-[#F5F5F0] border-b border-[#9A3B3B] pb-1 text-sm tracking-wider hover:text-[#9A3B3B] transition-colors" href="#contact">
                    Join the Opening List
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#18181b]" id="team">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-serif text-[#F5F5F0] tracking-tight">The Team Behind Koshu Club</h2>
</div>
<div className="grid md:grid-cols-2 gap-12 md:gap-24">

<div className="space-y-4 reveal">
<div className="w-full h-80 bg-[#121212] grayscale overflow-hidden mb-6 relative group">

<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600">
<span className="iconify" data-icon="lucide:chef-hat" data-width="48"></span>
</div>
</div>
<h3 className="text-2xl font-serif text-[#C5A059]">Chef J. Trent Harris</h3>
<p className="text-neutral-400 font-light leading-relaxed">
                        Leading the kitchen at Koshu Club, Chef Harris brings his experience from the one-Michelin-star Mujo in Atlanta. His background includes extensive time cooking Japanese cuisine in New York at acclaimed venues such as Suzume, Shuko, and Sushi Ginza Onodera, as well as a tenure at a Michelin-starred Portuguese restaurant, before partnering with Castellucci Hospitality Group.
                    </p>
</div>

<div className="space-y-4 reveal" style={{transitionDelay: '100ms'}}>
<div className="w-full h-80 bg-[#121212] grayscale overflow-hidden mb-6 relative group">

<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600">
<span className="iconify" data-icon="lucide:users" data-width="48"></span>
</div>
</div>
<h3 className="text-2xl font-serif text-[#C5A059]">Castellucci Hospitality Group</h3>
<p className="text-neutral-400 font-light leading-relaxed">
                        Castellucci Hospitality Group is an Atlanta-based restaurant group renowned for its thoughtful, chef-driven concepts. With a passion for hospitality and culinary excellence, CHG brings Koshu Club to Buckhead as a sophisticated sibling to Mujo, further elevating the city's dining landscape.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#121212] border-t border-white/5" id="contact">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

<div className="space-y-8 reveal">
<h2 className="text-3xl font-serif text-[#F5F5F0] tracking-tight">Find Koshu Club</h2>
<div className="space-y-1">
<p className="text-xl font-medium text-[#F5F5F0]">Koshu Club</p>
<p className="text-neutral-400 font-light">99 W Paces Ferry Rd NW</p>
<p className="text-neutral-400 font-light">Atlanta, GA 30305</p>
</div>
<p className="text-sm text-neutral-500 italic max-w-sm">
                    Located in Buckhead, across from the St. Regis Atlanta, within the 99 West Paces development.
                </p>
<div className="space-y-4 pt-4">
<div className="flex items-center gap-3 text-neutral-400">
<span className="iconify text-[#9A3B3B]" data-icon="lucide:mail" data-width="16"></span>
<a className="hover:text-[#C5A059] transition-colors" href="mailto:info@koshuclub.com">info@koshuclub.com</a>
</div>
<div className="flex items-center gap-3 text-neutral-400">
<span className="iconify text-[#9A3B3B]" data-icon="lucide:user" data-width="16"></span>
<a className="hover:text-[#C5A059] transition-colors" href="mailto:gm@koshuclub.com">gm@koshuclub.com</a>
</div>
<div className="flex items-center gap-3 text-neutral-400">
<span className="iconify text-[#9A3B3B]" data-icon="lucide:phone" data-width="16"></span>
<span>(404) 000-0000</span>
</div>
</div>
<p className="text-xs text-neutral-600 pt-4">For private dining and full buyouts, please use the contact form.</p>
</div>

<div className="reveal" style={{transitionDelay: '100ms'}}>
<form className="space-y-8 bg-[#18181b] p-8 rounded-sm shadow-lg border border-white/5">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Name</label>
<input className="custom-input w-full py-2 text-neutral-300" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Phone</label>
<input className="custom-input w-full py-2 text-neutral-300" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Email</label>
<input className="custom-input w-full py-2 text-neutral-300" placeholder="email@address.com" type="email"/>
</div>
<div className="space-y-4">
<label className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Inquiry Type</label>
<div className="flex gap-6">
<label className="flex items-center cursor-pointer checkbox-wrapper group">
<input checked="" className="hidden" name="inquiry" type="radio"/>
<div className="w-4 h-4 border border-neutral-600 rounded-full flex items-center justify-center mr-2 transition-colors group-hover:border-[#C5A059]">
<div className="w-2 h-2 bg-white rounded-full hidden"></div>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">General</span>
</label>
<label className="flex items-center cursor-pointer checkbox-wrapper group">
<input className="hidden" name="inquiry" type="radio"/>
<div className="w-4 h-4 border border-neutral-600 rounded-full flex items-center justify-center mr-2 transition-colors group-hover:border-[#C5A059]">
<div className="w-2 h-2 bg-white rounded-full hidden"></div>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Private Event</span>
</label>
<label className="flex items-center cursor-pointer checkbox-wrapper group">
<input className="hidden" name="inquiry" type="radio"/>
<div className="w-4 h-4 border border-neutral-600 rounded-full flex items-center justify-center mr-2 transition-colors group-hover:border-[#C5A059]">
<div className="w-2 h-2 bg-white rounded-full hidden"></div>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Media</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Message</label>
<textarea className="custom-input w-full py-2 text-neutral-300 resize-none" placeholder="How can we help you?" rows="3"></textarea>
</div>
<button className="w-full bg-[#F5F5F0] text-[#121212] py-4 rounded-sm text-xs uppercase tracking-widest font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-300" type="button">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-[#0f0f0f] border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<a className="text-xl font-serif text-[#F5F5F0] hover:text-[#C5A059] transition-colors" href="#">Koshu Club</a>
<p className="text-xs text-neutral-500 mt-2">Opening 2026 at 99 West Paces in Buckhead.<br/>A Castellucci Hospitality Group restaurant.</p>
</div>
<div className="flex space-x-6 text-xs text-neutral-400 uppercase tracking-wider">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#reservations">Reservations</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center space-x-4">
<span className="text-neutral-500 text-xs">@koshuclub</span>
<span className="text-neutral-600">|</span>
<span className="text-neutral-500 text-xs">@chgrestaurants</span>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/5 flex justify-center md:justify-between items-center text-[10px] text-neutral-600">
<p>© 2024 Koshu Club. All rights reserved.</p>
<p>Designed with <span className="text-[#9A3B3B]">♥</span> in Atlanta</p>
</div>
</footer>


    </>
  );
}
