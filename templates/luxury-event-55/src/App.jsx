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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width as requested
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-50/90 backdrop-blur-md border-b border-zinc-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-2xl tracking-tight text-zinc-900 flex flex-col uppercase" href="#">
                Scene Makers
            </a>
<div className="hidden md:flex space-x-10 text-sm tracking-wide uppercase text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#experiences">Experiences</a>
<a className="hover:text-zinc-900 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.2em] uppercase text-white bg-zinc-900 hover:bg-zinc-800 transition-colors" href="#booking">
                Inquire
            </a>

<button className="md:hidden text-zinc-900 p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

<img alt="Luxury Event Space" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&amp;fit=crop&amp;q=80&amp;w=2500"/>
<div className="absolute inset-0 bg-zinc-900/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
<span className="block text-xs md:text-sm tracking-[0.2em] uppercase text-zinc-200 mb-6 font-medium fade-in-up" style={{animationDelay: '0.1s'}}>Elevated Event Experiences</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight font-medium leading-[1.1] mb-8 fade-in-up" style={{animationDelay: '0.2s'}}>
                Luxury Photo Experiences That Elevate Every Event
            </h1>
<p className="text-lg md:text-xl text-zinc-200 font-light max-w-2xl mx-auto mb-12 fade-in-up" style={{animationDelay: '0.3s'}}>
                Interactive, high-end photo activations designed for unforgettable moments.
            </p>
<div className="fade-in-up" style={{animationDelay: '0.4s'}}>
<a className="inline-flex items-center justify-center px-10 py-5 text-sm tracking-[0.2em] uppercase text-zinc-900 bg-white hover:bg-zinc-100 transition-colors" href="#booking">
                    Book The Experience
                </a>
</div>
</div>
</header>

<section className="py-32 md:py-48 px-6 bg-white" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="order-2 md:order-1 relative h-[600px] w-full bg-zinc-100">
<img alt="Elegant Event Details" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&amp;fit=crop&amp;q=80&amp;w=1500"/>
</div>
<div className="order-1 md:order-2 max-w-lg">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-zinc-900 mb-8">
                    Defining the New Standard of Celebration
                </h2>
<div className="space-y-6 text-lg text-zinc-600 font-light leading-relaxed">
<p>
                        Scene Makers was created to bring a new level of experience to events. We go beyond traditional photo booths by designing visually striking, interactive environments that become a central part of the event design itself.
                    </p>
<p>
                        From elegant weddings to large-scale corporate activations, our goal is to create moments that feel exclusive, immersive, and inherently share-worthy. We are not just capturing memories; we are creating the scene.
                    </p>
</div>
<div className="mt-12 flex items-center space-x-4">
<div className="h-[1px] w-12 bg-zinc-300"></div>
<span className="text-xs tracking-widest uppercase text-zinc-500 font-medium">Based in Florida</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 text-center" id="experiences">
<div className="max-w-3xl mx-auto">
<span className="block text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4 font-medium">The Collection</span>
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-zinc-900 mb-8">
                Curated Immersive Experiences
            </h2>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-zinc-50">
<div className="max-w-7xl mx-auto">
<div className="relative h-[60vh] md:h-[80vh] w-full mb-12 md:mb-16 bg-zinc-200 overflow-hidden group">
<img alt="Mirror Cabin Installation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="grid md:grid-cols-12 gap-8 md:gap-16">
<div className="md:col-span-5">
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-zinc-900 mb-4">Mirror Cabin Experience</h3>
<p className="text-lg text-zinc-500 font-light mb-6">Our signature walk-in mirrored structure. An architectural statement piece that creates a fully immersive, infinite photo moment for modern weddings and upscale gatherings.</p>
</div>
<div className="md:col-span-7 grid sm:grid-cols-2 gap-8 text-lg font-light text-zinc-600">
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-zinc-900 mb-4 border-b border-zinc-200 pb-2">Dimensions Available</h4>
<ul className="space-y-3">
<li className="flex items-center"><i className="w-4 h-4 mr-3 text-zinc-400" data-lucide="check"></i> Signature: 2m x 2m x 2m</li>
<li className="flex items-center"><i className="w-4 h-4 mr-3 text-zinc-400" data-lucide="check"></i> Grand: 2.7m L x 2m H x 1m D</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-zinc-900 mb-4 border-b border-zinc-200 pb-2">Experience Features</h4>
<ul className="space-y-3">
<li className="flex items-center"><i className="w-4 h-4 mr-3 text-zinc-400" data-lucide="check"></i> Full mirror interior &amp; exterior</li>
<li className="flex items-center"><i className="w-4 h-4 mr-3 text-zinc-400" data-lucide="check"></i> Walk-in group capacity</li>
<li className="flex items-center"><i className="w-4 h-4 mr-3 text-zinc-400" data-lucide="check"></i> LED lighting &amp; custom branding</li>
<li className="flex items-center"><i className="w-4 h-4 mr-3 text-zinc-400" data-lucide="check"></i> High-end capture technology</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

<div className="group">
<div className="relative h-[500px] w-full mb-8 bg-zinc-100 overflow-hidden">
<img alt="Luxe Booth Professional Camera" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<h3 className="font-serif text-3xl tracking-tight text-zinc-900 mb-4">The Luxe Booth</h3>
<p className="text-lg text-zinc-600 font-light mb-6">A modern, editorial photo booth powered by a Canon R100 camera. Delivering professional-level photography with studio-quality clarity and lighting for spaces where quality must remain exceptionally high.</p>
<ul className="space-y-2 text-lg text-zinc-500 font-light">
<li>— Studio-quality crisp photography</li>
<li>— Clean, minimal physical footprint</li>
<li>— Seamless instant sharing</li>
<li>— Refined custom overlays</li>
</ul>
</div>

<div className="group md:-mt-16">
<div className="relative h-[500px] w-full mb-8 bg-zinc-100 overflow-hidden">
<img alt="5D Floral Wall Installation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="font-serif text-3xl tracking-tight text-zinc-900 mb-4">5D Floral Architecture</h3>
<p className="text-lg text-zinc-600 font-light mb-6">Luxury dimensional floral wall installations. These are design pieces, not simple backdrops—architectural, high-end, and visually impactful statements for galas and elevated weddings.</p>
<ul className="space-y-2 text-lg text-zinc-500 font-light">
<li>— Premium multi-dimensional designs</li>
<li>— Bespoke color palette options</li>
<li>— Striking structural presence</li>
<li>— Perfect pairing for photo capture</li>
</ul>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-zinc-50" id="gallery">
<div className="max-w-7xl mx-auto mb-16 flex items-end justify-between">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-zinc-900">Visuals</h2>
<a className="hidden md:flex items-center text-sm uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors" href="https://instagram.com" target="_blank">
                Follow @scenemakers
                <i className="w-4 h-4 ml-1" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 relative h-[500px] group overflow-hidden">
<img alt="Luxury Event" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&amp;fit=crop&amp;q=80&amp;w=1500"/>
</div>

<div className="relative h-[500px] group overflow-hidden">
<img alt="Event Details" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="relative h-[400px] group overflow-hidden">
<img alt="Elegant Setup" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="lg:col-span-2 relative h-[400px] group overflow-hidden">
<img alt="Atmosphere" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&amp;fit=crop&amp;q=80&amp;w=1500"/>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white border-t border-zinc-100" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-4xl tracking-tight text-zinc-900 mb-12 text-center">Frequently Asked</h2>
<div className="space-y-1">

<details className="group border-b border-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 text-xl text-zinc-900 hover:text-zinc-600 transition-colors">
<span>What areas do you serve?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-500 font-light text-lg pb-8 leading-relaxed">
                        We are based in Florida and provide luxury experiential services throughout the state. For select high-end events, we are available for travel outside of Florida upon review.
                    </div>
</details>

<details className="group border-b border-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 text-xl text-zinc-900 hover:text-zinc-600 transition-colors">
<span>How far in advance should I book?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-500 font-light text-lg pb-8 leading-relaxed">
                        To ensure availability for our premium installations, particularly the Mirror Cabin, we recommend inquiring 6 to 12 months in advance, especially for dates during peak wedding and holiday seasons.
                    </div>
</details>

<details className="group border-b border-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 text-xl text-zinc-900 hover:text-zinc-600 transition-colors">
<span>Do you offer custom branding?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-500 font-light text-lg pb-8 leading-relaxed">
                        Yes. Our experiences are designed to be seamless extensions of your event. We offer bespoke branding opportunities including exterior vinyl wrapping, custom digital overlays, and tailored lighting schemes.
                    </div>
</details>

<details className="group border-b border-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 text-xl text-zinc-900 hover:text-zinc-600 transition-colors">
<span>What is included in each package?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-500 font-light text-lg pb-8 leading-relaxed">
                        Every reservation includes white-glove delivery and structural setup, an on-site experiential attendant, high-resolution digital capture, instant sharing capabilities, and access to an online gallery. Custom additions are curated based on your vision.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-zinc-900 text-zinc-50" id="booking">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
<div>
<h2 className="font-serif text-5xl md:text-6xl tracking-tight text-white mb-6">Let's Create<br/>Something Unforgettable.</h2>
<p className="text-xl text-zinc-400 font-light mb-12 max-w-md">
                    Inquire below to check availability and begin curating your bespoke visual experience.
                </p>
<div className="space-y-4 text-zinc-400 font-light text-lg">
<a className="flex items-center hover:text-white transition-colors" href="mailto:hello@scenemakersco.com">
<i className="w-5 h-5 mr-4" data-lucide="mail"></i> hello@scenemakersco.com
                    </a>
<a className="flex items-center hover:text-white transition-colors" href="https://instagram.com">
<i className="w-5 h-5 mr-4" data-lucide="instagram"></i> @scenemakers
                    </a>
</div>
</div>

<div>
<form className="space-y-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="relative">
<input className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white font-light focus:outline-none focus:border-white transition-colors placeholder-transparent" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white font-light focus:outline-none focus:border-white transition-colors placeholder-transparent" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 -top-3.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white" htmlFor="email">Email Address</label>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="relative">
<input className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white font-light focus:outline-none focus:border-white transition-colors placeholder-transparent" id="date" placeholder="Event Date" type="text"/>
<label className="absolute left-0 -top-3.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white" htmlFor="date">Event Date</label>
</div>
<div className="relative">

<select className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white font-light focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer" id="type">
<option className="text-zinc-900" disabled="" selected="" value="">Event Type</option>
<option className="text-zinc-900" value="wedding">Luxury Wedding</option>
<option className="text-zinc-900" value="corporate">Corporate Activation</option>
<option className="text-zinc-900" value="private">Private Celebration</option>
<option className="text-zinc-900" value="other">Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="relative">
<input className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white font-light focus:outline-none focus:border-white transition-colors placeholder-transparent" id="location" placeholder="Location" type="text"/>
<label className="absolute left-0 -top-3.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white" htmlFor="location">Venue / Location</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white font-light focus:outline-none focus:border-white transition-colors placeholder-transparent" id="guests" placeholder="Guest Count" type="number"/>
<label className="absolute left-0 -top-3.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white" htmlFor="guests">Estimated Guest Count</label>
</div>
</div>
<div className="relative pt-4">
<textarea className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white font-light focus:outline-none focus:border-white transition-colors placeholder-transparent resize-none" id="message" placeholder="Message" rows="4"></textarea>
<label className="absolute left-0 top-0 text-sm text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white" htmlFor="message">Tell us about your vision...</label>
</div>
<button className="mt-8 px-10 py-5 w-full sm:w-auto text-sm tracking-[0.2em] uppercase text-zinc-900 bg-white hover:bg-zinc-200 transition-colors" type="button">
                        Submit Inquiry
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-12 px-6 border-t border-zinc-900 text-zinc-500 text-sm font-light">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0 font-serif tracking-tight text-xl text-zinc-400">
                Scene Makers
            </div>
<div className="flex space-x-6 uppercase tracking-widest text-xs">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<span className="opacity-50">© 2024</span>
</div>
</div>
</footer>


    </>
  );
}
