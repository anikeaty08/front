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



      // Initialize Lucide Icons
      lucide.createIcons();

      // Theme Logic
      const root = document.documentElement;

      document.addEventListener('DOMContentLoaded', () => {
          // 1. Text Reveal Animation
          const revealText = document.querySelector('.reveal-text');
          if (revealText) {
              const text = revealText.innerText;
              revealText.innerHTML = '';
              text.split(' ').forEach(word => {
                  const span = document.createElement('span');
                  span.innerText = word + ' ';
                  revealText.appendChild(span);
              });

              const spans = revealText.querySelectorAll('span');
              const handleScrollReveal = () => {
                  const rect = revealText.getBoundingClientRect();
                  const viewHeight = window.innerHeight;
                  if (rect.top < viewHeight && rect.bottom > 0) {
                      const percent = 1 - (rect.bottom / (viewHeight + rect.height));
                      const activeIndex = Math.floor(percent * spans.length * 2.5);
                      spans.forEach((span, index) => {
                          if (index < activeIndex) span.classList.add('active');
                          else span.classList.remove('active');
                      });
                  }
              };
              window.addEventListener('scroll', handleScrollReveal);
          }

          // 2. Parallax
          window.addEventListener('scroll', () => {
             // Basic parallax for specific elements can be added here if not using CSS transforms
          });

          // 3. Navbar Logic
          const navbar = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) navbar.classList.add('bg-zinc-950/90', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-4');
              else navbar.classList.remove('bg-zinc-950/90', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-4');
              
              if (window.scrollY <= 50) navbar.classList.add('py-6');
          });

          // 4. Scroll-based Accent Color Logic
          // Catering colors: Amber/Gold, then maybe a deep Wine or Slate
          const sections = [
              { id: 'philosophy', color: '#C5A059' }, // Gold
              { id: 'concepts', color: '#BCAAA4' },   // Muted Taupe
              { id: 'menu-curation', color: '#C5A059' }, // Gold
              { id: 'inquire', color: '#E0E0E0' }     // White/Silver
          ];

          window.addEventListener('scroll', () => {
              const scrollCenter = window.scrollY + (window.innerHeight / 2);
              for (const section of sections) {
                  const el = document.getElementById(section.id);
                  if (el) {
                      const { offsetTop, offsetHeight } = el;
                      if (scrollCenter >= offsetTop && scrollCenter < offsetTop + offsetHeight) {
                          root.style.setProperty('--accent-color', section.color);
                      }
                  }
              }
          });
      });
    
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
      

<nav className="fixed top-0 w-full z-50 py-6 transition-all duration-500" id="navbar">
<div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-500">
<a className="hover:text-white transition-colors" href="#philosophy">
            Philosophy
          </a>
<a className="hover:text-white transition-colors" href="#concepts">
            Concepts
          </a>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<a className="font-serif text-2xl md:text-3xl hover:opacity-80 transition-opacity text-white tracking-tight" href="#">
            MIGLIACCIO
            <span className="block text-[10px] font-sans tracking-[0.4em] text-accent uppercase opacity-80 mt-1">Catering</span>
</a>
</div>

<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-500">
<a className="hover:text-white transition-colors" href="#menu-curation">
              Menu
            </a>
<a className="border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#inquire">
              Inquire
            </a>
</div>
<button className="flex items-center gap-2 text-white transition-colors md:hidden">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</nav>

<header className="overflow-hidden flex w-full h-[110vh] relative items-center justify-center">

<div className="absolute inset-0 z-0">

<img alt="Atmospheric Dining" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2400&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/20 to-zinc-950"></div>
<div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12 opacity-0 animate-[fade-in_1s_ease-out_forwards]" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
<p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-8 text-accent font-medium">
          Est. 2024 • Detroit
        </p>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter mb-10 drop-shadow-2xl">
          The Art of
          <br/>
<span className="italic font-light text-white/80">Gathering</span>
</h1>
<div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/50 to-white/0 mx-auto mb-8"></div>
<p className="md:text-lg leading-relaxed font-light text-zinc-200/80 max-w-lg mx-auto font-serif italic">
          Curated culinary experiences for moments that matter.
        </p>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Discover</span>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>
</header>

<section className="bg-zinc-950 pt-32 pb-40 relative z-10" id="philosophy">
<div className="max-w-5xl mx-auto px-6">
<p className="reveal-text font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-white text-center font-light">
<span>We</span>
<span>believe</span>
<span>every</span>
<span>plate</span>
<span>tells</span>
<span>a</span>
<span>story.</span>
<span>From</span>
<span>intimate</span>
<span>chef's</span>
<span>tables</span>
<span>to</span>
<span>grand</span>
<span>galas,</span>
<span>our</span>
<span>cuisine</span>
<span>is</span>
<span>rooted</span>
<span>in</span>
<span>seasonality,</span>
<span>executed</span>
<span>with</span>
<span>precision,</span>
<span>and</span>
<span>served</span>
<span>with</span>
<span>quiet</span>
<span>elegance.</span>
<span>This</span>
<span>is</span>
<span>catering</span>
<span>reimagined</span>
<span>for</span>
<span>the</span>
<span>modern</span>
<span>palate.</span>
</p>
</div>
</section>

<section className="bg-zinc-950 pb-32 relative" id="concepts">
<div className="max-w-[1600px] mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-8">
<div>
<span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
              Our Services
            </span>
<h2 className="font-serif text-4xl md:text-5xl text-white">Curated Concepts</h2>
</div>
<div className="text-right hidden md:block">
<p className="text-zinc-500 text-sm max-w-xs font-light">
              Tailored specifically to the tone and texture<br/>of your event.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">

<div className="md:col-span-8 relative group cursor-none">
<div className="overflow-hidden aspect-[16/9] relative mb-6">
<img alt="Banquet Styling" className="w-full h-full object-cover img-scale-hover grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl text-white mb-2">Corporate &amp; Galas</h3>
<p className="text-zinc-500 text-sm max-w-md font-light leading-relaxed">
                  Seamless execution for large-scale events. From passed hors d'oeuvres to multi-course seated dinners, we bring restaurant-quality hospitality to any venue.
                </p>
</div>
<span className="text-4xl font-serif text-zinc-800 group-hover:text-accent transition-colors">01</span>
</div>
</div>

<div className="md:col-span-4 md:mt-32 relative group">
<div className="overflow-hidden aspect-[3/4] relative mb-6">
<img alt="Plating Detail" className="w-full h-full object-cover img-scale-hover grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl text-white mb-2">Social &amp; Grazing</h3>
<p className="text-zinc-500 text-sm font-light leading-relaxed">
                  Artful displays of charcuterie, artisanal cheeses, and harvest tables designed to spark conversation.
                </p>
</div>
<span className="text-4xl font-serif text-zinc-800 group-hover:text-accent transition-colors">02</span>
</div>
</div>

<div className="md:col-span-6 md:col-start-4 relative group">
<div className="overflow-hidden aspect-[4/3] relative mb-6">
<img alt="Private Chef" className="w-full h-full object-cover img-scale-hover grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl text-white mb-2">Private Chef's Table</h3>
<p className="text-zinc-500 text-sm max-w-md font-light leading-relaxed">
                  The ultimate luxury. A dedicated culinary team in your home or private venue, crafting a bespoke tasting menu right before your eyes.
                </p>
</div>
<span className="text-4xl font-serif text-zinc-800 group-hover:text-accent transition-colors">03</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-32 relative border-t border-white/5" id="menu-curation">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
            The Palate
          </span>
<h2 className="font-serif text-5xl text-white mb-8">
            Seasonal Selections
          </h2>
<p className="text-zinc-400 font-serif italic text-lg">
            A glimpse into our current repertoire.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-16 md:gap-24">

<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-10 border-b border-accent/20 pb-4 inline-block w-full">
              Canapés &amp; Starters
            </h4>
<ul className="space-y-10">
<li className="group">
<div className="flex justify-between items-baseline mb-2">
<h5 className="text-white font-serif text-xl group-hover:text-accent transition-colors">Wagyu Tartare</h5>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                  Truffle emulsion, crispy shallot, quail egg yolk, brioche toast point.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-2">
<h5 className="text-white font-serif text-xl group-hover:text-accent transition-colors">Scallop Crudo</h5>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                  Blood orange, fennel pollen, cold pressed olive oil, micro cilantro.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-2">
<h5 className="text-white font-serif text-xl group-hover:text-accent transition-colors">Wild Mushroom Tartlet</h5>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                  Whipped goat cheese, thyme honey, phyllo pastry, aged balsamic.
                </p>
</li>
</ul>
</div>

<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-10 border-b border-accent/20 pb-4 inline-block w-full">
              Mains &amp; Stations
            </h4>
<ul className="space-y-10">
<li className="group">
<div className="flex justify-between items-baseline mb-2">
<h5 className="text-white font-serif text-xl group-hover:text-accent transition-colors">Braised Short Rib</h5>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                  Parsnip purée, roasted root vegetables, red wine reduction, gremolata.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-2">
<h5 className="text-white font-serif text-xl group-hover:text-accent transition-colors">Miso Glazed Black Cod</h5>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                  Bok choy, ginger dashi, forbidden rice, sesame crisp.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-2">
<h5 className="text-white font-serif text-xl group-hover:text-accent transition-colors">Raw Bar Station</h5>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                  Chef-attended shucking, east &amp; west coast oysters, chilled lobster, mignonettes.
                </p>
</li>
</ul>
</div>
</div>
<div className="text-center mt-20">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors border-b border-transparent hover:border-accent pb-1" href="#">
            Download Full Seasonal PDF
            <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="m7 10 5 5 5-5"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="h-[60vh] relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0">
<img alt="Table Setting" className="w-full h-full object-cover opacity-50 fixed-bg grayscale hover:grayscale-0 transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="relative z-10 text-center">
<p className="font-serif text-3xl md:text-5xl italic text-white/90 mb-6 max-w-2xl mx-auto px-6">
          "The table is a meeting place, a gathering ground, a source of sustenance and nourishment, festivity, safety, and satisfaction."
        </p>
<div className="w-12 h-[1px] bg-accent mx-auto"></div>
</div>
</section>

<section className="bg-zinc-950 py-32 relative" id="inquire">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-start">

<div>
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
              Reservations
            </span>
<h2 className="font-serif text-5xl md:text-6xl text-white mb-8">
              Begin the<br/>Conversation
            </h2>
<p className="text-zinc-400 font-light text-sm leading-relaxed mb-12 max-w-md">
              We accept a limited number of engagements per season to ensure the highest level of attention and detail for every event.
            </p>
<div className="space-y-8">
<div>
<h4 className="text-white font-medium mb-1">Direct Inquiries</h4>
<a className="text-zinc-500 hover:text-accent transition-colors" href="mailto:events@migliaccio.com">events@migliaccio.com</a>
</div>
<div>
<h4 className="text-white font-medium mb-1">Studio</h4>
<p className="text-zinc-500">Detroit, Michigan</p>
<p className="text-zinc-500">By Appointment Only</p>
</div>
</div>
</div>

<div className="bg-zinc-900/20 p-10 md:p-12 border border-white/5 backdrop-blur-sm">
<form className="space-y-10">
<div className="grid md:grid-cols-2 gap-10">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Name</label>
<input className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-800 focus:outline-none focus:border-accent transition-colors font-light" placeholder="First Last" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Company (Optional)</label>
<input className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-800 focus:outline-none focus:border-accent transition-colors font-light" placeholder="Organization" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-10">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Date</label>
<input className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-800 focus:outline-none focus:border-accent transition-colors font-light invert-calendar" type="date"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Guest Count</label>
<select className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:outline-none focus:border-accent transition-colors font-light appearance-none cursor-pointer">
<option className="bg-zinc-900 text-zinc-400">Select Range</option>
<option className="bg-zinc-900">Intimate (Under 20)</option>
<option className="bg-zinc-900">Gathering (20 - 50)</option>
<option className="bg-zinc-900">Event (50 - 150)</option>
<option className="bg-zinc-900">Gala (150+)</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Event Type</label>
<div className="flex flex-wrap gap-4 mt-2">
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-zinc-800 text-zinc-500 text-xs rounded-full peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all group-hover:border-zinc-600">Wedding</span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-zinc-800 text-zinc-500 text-xs rounded-full peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all group-hover:border-zinc-600">Corporate</span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-zinc-800 text-zinc-500 text-xs rounded-full peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all group-hover:border-zinc-600">Private Dinner</span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-zinc-800 text-zinc-500 text-xs rounded-full peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all group-hover:border-zinc-600">Other</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Additional Details</label>
<textarea className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-800 focus:outline-none focus:border-accent transition-colors font-light resize-none h-24" placeholder="Tell us about your vision..."></textarea>
</div>
<button className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-accent hover:text-white mt-4 w-full md:w-auto" type="button">
<span className="relative z-10">Request Proposal</span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-20 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
<div className="text-center md:text-left">
<span className="font-serif text-2xl text-white">MIGLIACCIO</span>
<p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-2">
            © 2024 Detroit Hospitality Group.
          </p>
</div>
<div className="flex gap-8 text-xs uppercase tracking-widest text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</footer>



    </>
  );
}
