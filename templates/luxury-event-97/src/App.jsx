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



        // Initialize Icons
        lucide.createIcons();

        // Mouse Follow Effect
        const cursorGlow = document.getElementById('cursor-glow');
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });

        // Intersection Observer for Reveal Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // FAQ Toggle Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // Close others (optional, keeps it clean)
            document.querySelectorAll('#faq .h-0').forEach(el => {
                if(el !== content) {
                    el.style.height = '0';
                    el.style.opacity = '0';
                    el.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            if (content.style.height && content.style.height !== '0px') {
                content.style.height = '0';
                content.style.opacity = '0';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.height = content.scrollHeight + 'px';
                content.style.opacity = '1';
                icon.style.transform = 'rotate(45deg)';
            }
        }

        // Navbar blur on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/80', 'backdrop-blur-xl');
                navbar.classList.remove('bg-black/50', 'backdrop-blur-md');
            } else {
                navbar.classList.remove('bg-black/80', 'backdrop-blur-xl');
                navbar.classList.add('bg-black/50', 'backdrop-blur-md');
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
      

<div id="cursor-glow"></div>

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-black/50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-light tracking-tighter text-white flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<span className="tracking-[0.2em] font-medium">LIVCOM</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light tracking-wide text-zinc-400 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-sm font-light tracking-wide text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-light tracking-wide text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-light tracking-wide text-zinc-400 hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-light tracking-wide text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="text-sm font-light tracking-wide text-zinc-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-medium tracking-wide text-black bg-white rounded-full hover:bg-zinc-200 transition-colors" href="#booking">
                    Book Consultation
                </a>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Luxury Event" className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&amp;w=2998&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
<div className="reveal-on-scroll">
<span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.2em] text-zinc-300 backdrop-blur-sm mb-6 uppercase">
                    Architects of Awe
                </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-8 leading-[0.9]">
                    Orchestrating <br/>
<span className="text-gradient font-medium italic">Timeless Elegance</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    LivCom transforms visions into cinematic realities. We specialize in curating luxury weddings, corporate galas, and private celebrations across the UK and beyond.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-4 bg-white text-black text-sm font-medium tracking-wide overflow-hidden rounded-full w-full md:w-auto" href="#booking">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">Plan Your Event</span>
<div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</a>
<a className="px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide rounded-full hover:bg-white/5 transition-colors w-full md:w-auto" href="#gallery">
                        View Portfolio
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<i className="w-5 h-5 text-zinc-500" data-lucide="arrow-down"></i>
</div>
</section>

<section className="py-20 border-b border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal-on-scroll">
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">500+</h3>
<p className="text-xs tracking-widest uppercase text-zinc-500">Events Curated</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">12</h3>
<p className="text-xs tracking-widest uppercase text-zinc-500">Years Excellence</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">35+</h3>
<p className="text-xs tracking-widest uppercase text-zinc-500">Awards Won</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">100%</h3>
<p className="text-xs tracking-widest uppercase text-zinc-500">Client Satisfaction</p>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-900/10 blur-[120px] rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<img alt="Team Planning" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=2969&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal-on-scroll stagger-delay-1">
<h2 className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-4">Our Essence</h2>
<h3 className="text-3xl md:text-5xl font-light text-white tracking-tighter mb-6">
                    Beyond Planning.<br/>We Craft <span className="italic text-zinc-400">Atmospheres</span>.
                </h3>
<p className="text-zinc-400 font-light leading-relaxed mb-6">
                    At LivCom, we believe an event is more than a gathering; it is a living, breathing piece of art. Founded on the principles of precision and passion, our team orchestrates every detail to ensure a seamless symphony of experiences.
                </p>
<p className="text-zinc-400 font-light leading-relaxed mb-8">
                    From the initial concept to the final toast, we are dedicated to bringing your unique story to life with an aesthetic that is both modern and timeless.
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="award"></i>
</div>
<div>
<p className="text-sm text-white font-medium">Certified Excellence</p>
<p className="text-xs text-zinc-500">Recognized by Global Event Bodies</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/20 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 mb-20 text-center reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tighter mb-4">Our Expertise</h2>
<p className="text-zinc-400 font-light max-w-xl mx-auto">
                Bespoke services tailored to the most discerning clients.
            </p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center border border-white/10 mb-8 text-white">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Weddings</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        From intimate elopements to grand cathedral ceremonies. We handle vendor coordination, design styling, and day-of management.
                    </p>
<a className="text-xs font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#booking">Start Planning →</a>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 reveal-on-scroll stagger-delay-1">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center border border-white/10 mb-8 text-white">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Corporate Events</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        Product launches, gala dinners, and executive retreats. We ensure your brand's message is delivered with sophistication.
                    </p>
<a className="text-xs font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#booking">Inquire Now →</a>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 reveal-on-scroll stagger-delay-2">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center border border-white/10 mb-8 text-white">
<i className="w-6 h-6" data-lucide="glass-water"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Private &amp; Social</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        Luxury birthdays, anniversaries, and destination parties. Creating unforgettable moments for you and your guests.
                    </p>
<a className="text-xs font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#booking">Book Now →</a>
</div>
</div>
</div>
</section>

<section className="py-32" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tighter mb-2">Selected Works</h2>
<p className="text-zinc-500 text-sm tracking-wide">A curation of our finest moments</p>
</div>
<a className="hidden md:block text-sm text-white border border-white/10 px-6 py-3 rounded-full hover:bg-white/5 transition-colors" href="#">View All Projects</a>
</div>

<div className="max-w-7xl mx-auto px-6 columns-1 md:columns-3 gap-6 space-y-6">
<div className="relative group overflow-hidden rounded-lg break-inside-avoid reveal-on-scroll">
<img alt="Wedding Table" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-medium tracking-widest text-sm uppercase">The Kensington Wedding</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg break-inside-avoid reveal-on-scroll">
<img alt="Fashion Event" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2970&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-medium tracking-widest text-sm uppercase">Vogue Gala</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg break-inside-avoid reveal-on-scroll">
<img alt="Private Party" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&amp;w=3062&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-medium tracking-widest text-sm uppercase">Summer Solstice</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg break-inside-avoid reveal-on-scroll">
<img alt="Corporate" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&amp;w=2970&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-medium tracking-widest text-sm uppercase">Tech Summit 2023</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg break-inside-avoid reveal-on-scroll">
<img alt="Floral" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-medium tracking-widest text-sm uppercase">Floral Design</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg break-inside-avoid reveal-on-scroll">
<img alt="Champagne" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?q=80&amp;w=2974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-medium tracking-widest text-sm uppercase">Cocktail Hour</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/30 border-y border-white/5" id="booking">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tighter mb-4">Secure Your Date</h2>
<p className="text-zinc-400 font-light">Begin the journey to your perfect event.</p>
</div>
<div className="bg-zinc-950 border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl reveal-on-scroll">
<form className="space-y-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="relative">
<input className="custom-input block w-full bg-transparent border-0 border-b border-zinc-700 text-white focus:ring-0 focus:border-indigo-500 transition-colors py-2 text-sm" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 top-2 text-zinc-500 text-sm transition-all duration-300 cursor-text" htmlFor="name">Full Name</label>
</div>

<div className="relative">
<input className="custom-input block w-full bg-transparent border-0 border-b border-zinc-700 text-white focus:ring-0 focus:border-indigo-500 transition-colors py-2 text-sm" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 top-2 text-zinc-500 text-sm transition-all duration-300 cursor-text" htmlFor="email">Email Address</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="relative">
<input className="block w-full bg-transparent border-0 border-b border-zinc-700 text-white focus:ring-0 focus:border-indigo-500 transition-colors py-2 text-sm" id="date" type="date"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 uppercase tracking-widest" htmlFor="date">Preferred Date</label>
</div>

<div className="relative">
<select className="block w-full bg-transparent border-0 border-b border-zinc-700 text-white focus:ring-0 focus:border-indigo-500 transition-colors py-2 text-sm" id="service">
<option className="bg-zinc-900">Wedding Planning</option>
<option className="bg-zinc-900">Corporate Event</option>
<option className="bg-zinc-900">Private Party</option>
<option className="bg-zinc-900">Other</option>
</select>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 uppercase tracking-widest" htmlFor="service">Event Type</label>
</div>
</div>

<div className="relative">
<textarea className="custom-input block w-full bg-transparent border-0 border-b border-zinc-700 text-white focus:ring-0 focus:border-indigo-500 transition-colors py-2 text-sm resize-none" id="message" placeholder=" " rows="3"></textarea>
<label className="absolute left-0 top-2 text-zinc-500 text-sm transition-all duration-300 cursor-text" htmlFor="message">Tell us about your vision...</label>
</div>
<div className="flex justify-end pt-4">
<button className="group relative px-8 py-3 bg-white text-black font-medium text-sm rounded-full overflow-hidden transition-all hover:px-10" type="button">
<span className="relative z-10 group-hover:text-white transition-colors">Confirm Request</span>
<div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</div>
</form>
</div>
</div>
</section>

<section className="py-32" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-light text-white tracking-tighter mb-12 text-center reveal-on-scroll">Frequently Asked Questions</h2>
<div className="space-y-4 reveal-on-scroll">

<div className="group border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left text-lg font-light text-zinc-300 hover:text-white transition-colors py-2" onclick="toggleFaq(this)">
<span>How far in advance should we book?</span>
<i className="w-5 h-5 text-zinc-500 group-hover:rotate-90 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="h-0 overflow-hidden transition-all duration-500 opacity-50">
<p className="pt-2 pb-4 text-zinc-400 font-light text-sm leading-relaxed">
                            For weddings, we recommend 12-18 months. For corporate events, 6-9 months allows us to secure premium venues and vendors.
                        </p>
</div>
</div>

<div className="group border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left text-lg font-light text-zinc-300 hover:text-white transition-colors py-2" onclick="toggleFaq(this)">
<span>Do you handle destination events?</span>
<i className="w-5 h-5 text-zinc-500 group-hover:rotate-90 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="h-0 overflow-hidden transition-all duration-500 opacity-50">
<p className="pt-2 pb-4 text-zinc-400 font-light text-sm leading-relaxed">
                            Absolutely. LivCom specializes in luxury destination management across Europe and select global locations.
                        </p>
</div>
</div>

<div className="group border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left text-lg font-light text-zinc-300 hover:text-white transition-colors py-2" onclick="toggleFaq(this)">
<span>What is your pricing structure?</span>
<i className="w-5 h-5 text-zinc-500 group-hover:rotate-90 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="h-0 overflow-hidden transition-all duration-500 opacity-50">
<p className="pt-2 pb-4 text-zinc-400 font-light text-sm leading-relaxed">
                            We offer bespoke packages tailored to the scale and complexity of your event. Please contact us for a personalized consultation.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tighter mb-6">Let's Create<br/>Something Iconic.</h2>
<p className="text-zinc-400 font-light mb-12">Reach out to discuss your upcoming event.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-4 h-4 text-white" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Visit Us</h4>
<p className="text-zinc-500 text-sm font-light">12 Teilo Street, L8 8BS<br/>Liverpool, UK</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-4 h-4 text-white" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Call Us</h4>
<p className="text-zinc-500 text-sm font-light">+44 7344 282509</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-4 h-4 text-white" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Email Us</h4>
<a className="text-zinc-500 text-sm font-light hover:text-white transition-colors" href="mailto:contact@livcom.co.uk">contact@livcom.co.uk</a>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/20 p-8 rounded-2xl border border-white/5 reveal-on-scroll stagger-delay-1">
<form className="space-y-6">
<div>
<input className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-white/40 focus:outline-none transition-colors" placeholder="Your Name" type="text"/>
</div>
<div>
<input className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-white/40 focus:outline-none transition-colors" placeholder="Your Email" type="email"/>
</div>
<div>
<textarea className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-white/40 focus:outline-none transition-colors resize-none" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors">Send Message</button>
</form>
</div>
</div>
</section>

<footer className="bg-black py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<h3 className="text-2xl font-light tracking-[0.2em] text-white mb-2">LIVCOM</h3>
<p className="text-xs text-zinc-600">© 2023 LivCom Events. All Rights Reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
