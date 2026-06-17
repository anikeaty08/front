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



        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
                setTimeout(() => {
                    if(!page.classList.contains('active')) {
                        page.style.display = 'none';
                    }
                }, 400); // Wait for transition
            });

            // Show selected page
            const selected = document.getElementById(pageId);
            selected.style.display = 'block';
            // Small delay to allow display block to apply before opacity transition
            setTimeout(() => {
                selected.classList.add('active');
            }, 50);

            // Scroll to top
            window.scrollTo(0, 0);
        }

        function scrollToBook() {
            const form = document.getElementById('booking-form');
            if(form) {
                form.scrollIntoView({ behavior: 'smooth' });
            }
        }
    
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter uppercase font-medium text-stone-900" href="#" onclick="showPage('home')">
                The Houndry<span className="text-stone-400">.</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#" onclick="showPage('home')">Experience</a>
<a className="hover:text-stone-900 transition-colors" href="#" onclick="showPage('services')">Suites &amp; Services</a>
<a className="hover:text-stone-900 transition-colors" href="#about">Philosophy</a>
<a className="hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="px-5 py-2.5 bg-stone-900 text-stone-50 text-xs font-medium uppercase tracking-widest rounded-full hover:bg-stone-800 transition-all duration-300" href="#" onclick="showPage('services')">
                    Book a Tour
                </a>
</div>
</div>
</nav>

<main className="page active pt-20" id="home">

<section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Premium Dog" className="w-full h-full object-cover opacity-90 img-fade" src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300 bg-stone-50/50 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs uppercase tracking-widest font-medium text-stone-600">Now Accepting Members in Ontario</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
                    The refined retreat <br/> your dog deserves.
                </h1>
<p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                    A boutique social club and boarding hotel designed for the modern canine. Where safety meets sophistication.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-4 bg-stone-900 text-stone-50 text-sm font-medium uppercase tracking-widest rounded-full hover:bg-stone-800 transition-all" onclick="showPage('services')">
                        Apply for Membership
                    </button>
<button className="w-full md:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-900 text-sm font-medium uppercase tracking-widest rounded-full hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch the Film
                    </button>
</div>
</div>
</section>

<section className="py-12 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs uppercase tracking-widest text-stone-400 mb-8">As seen in</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">

<span className="text-xl font-serif italic">Vogue Living</span>
<span className="text-xl font-serif">Monocle</span>
<span className="text-xl font-bold tracking-tighter">HYPEBEAST</span>
<span className="text-xl font-serif italic">The Globe and Mail</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Not just a daycare.<br/>A second home.</h2>
<p className="text-stone-500 font-light text-lg">We've reimagined pet care by removing the cages and chaos, replacing them with curated playgroups, enrichment, and boutique hospitality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-stone-100">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-2xl font-medium tracking-tight">The Lobby</h3>
<p className="text-sm opacity-90 font-light">Climate-controlled, HEPA-filtered environments.</p>
</div>
</div>

<div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 flex flex-col justify-between hover:border-stone-300 transition-colors">
<iconify-icon className="text-stone-900 text-4xl mb-4" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Uncompromised Safety</h3>
<p className="text-stone-500 text-sm leading-relaxed">24/7 on-site staff, strict vaccination protocols, and behavioral assessments for every member.</p>
</div>
</div>

<div className="bg-stone-900 text-stone-50 rounded-2xl p-8 flex flex-col justify-between group cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-amber-200 text-4xl" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-stone-400 group-hover:text-white transition-colors text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Concierge Service</h3>
<p className="text-stone-400 text-sm leading-relaxed">From grooming appointments to dietary management, we handle the details.</p>
</div>
</div>

<div className="md:col-span-2 bg-stone-50 rounded-2xl p-8 border border-stone-100 flex items-center justify-between hover:border-stone-300 transition-colors">
<div className="max-w-md">
<h3 className="text-xl font-medium tracking-tight mb-2">Low Ratio Guarantee</h3>
<p className="text-stone-500 text-sm leading-relaxed">We maintain a strict 1:10 handler-to-dog ratio to ensure personal attention and safer play.</p>
</div>
<div className="h-16 w-16 bg-stone-200 rounded-full flex items-center justify-center text-stone-900 font-medium">1:10</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 block">The Curriculum</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">A day in the life of<br/>a Houndry member.</h2>
<div className="space-y-8 mt-12">
<div className="flex gap-6 border-l border-stone-700 pl-6 hover:border-emerald-400 transition-colors cursor-default">
<span className="text-stone-400 font-mono text-sm pt-1">08:00</span>
<div>
<h4 className="text-lg font-medium mb-1">Morning Assembly</h4>
<p className="text-stone-400 text-sm font-light">Structured socialization and sniff-checks in our outdoor park.</p>
</div>
</div>
<div className="flex gap-6 border-l border-stone-700 pl-6 hover:border-emerald-400 transition-colors cursor-default">
<span className="text-stone-400 font-mono text-sm pt-1">12:00</span>
<div>
<h4 className="text-lg font-medium mb-1">Sensory Nap Time</h4>
<p className="text-stone-400 text-sm font-light">Lavender-infused rest period with classical music to lower cortisol.</p>
</div>
</div>
<div className="flex gap-6 border-l border-stone-700 pl-6 hover:border-emerald-400 transition-colors cursor-default">
<span className="text-stone-400 font-mono text-sm pt-1">15:00</span>
<div>
<h4 className="text-lg font-medium mb-1">Enrichment Activities</h4>
<p className="text-stone-400 text-sm font-light">Brain games, agility fundamentals, and bubble chasing.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
<img alt="Dog Sleeping" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-emerald-400" icon="solar:map-point-linear"></iconify-icon>
                            Toronto Location
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Certified Care Specialists</h2>
<p className="text-stone-500 max-w-lg mx-auto">Our team isn't just "dog lovers." They are certified in canine CPR, behavior, and group management.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="text-center">
<div className="w-32 h-32 mx-auto rounded-full bg-stone-200 overflow-hidden mb-4">
<img alt="Sarah" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2776&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium">Sarah Jenkins</h3>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Head of Behaviour</p>
</div>
<div className="text-center">
<div className="w-32 h-32 mx-auto rounded-full bg-stone-200 overflow-hidden mb-4">
<img alt="David" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium">David Ross</h3>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Facility Director</p>
</div>
<div className="text-center">
<div className="w-32 h-32 mx-auto rounded-full bg-stone-200 overflow-hidden mb-4">
<img alt="Elena" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=2861&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium">Elena Wu</h3>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Senior Handler</p>
</div>
<div className="text-center">
<div className="w-32 h-32 mx-auto rounded-full bg-stone-200 overflow-hidden mb-4">
<img alt="Mark" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium">Mark Thompson</h3>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Grooming Stylist</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="bg-white p-10 rounded-2xl border border-stone-100 shadow-sm">
<div className="flex gap-1 text-emerald-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xl font-light text-stone-800 leading-relaxed mb-6">"The Houndry is in a league of its own. It feels like I'm dropping Cooper off at a 5-star hotel. The daily photo updates and report cards give me total peace of mind."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200"></div>
<div>
<p className="text-sm font-medium text-stone-900">Jessica Miller</p>
<p className="text-xs text-stone-500">Owner of Cooper, Vizsla</p>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-2xl border border-stone-100 shadow-sm">
<div className="flex gap-1 text-emerald-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xl font-light text-stone-800 leading-relaxed mb-6">"Finally, a place in Ontario that understands high-maintenance breeds. The staff is incredibly knowledgeable and the facility is spotless."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200"></div>
<div>
<p className="text-sm font-medium text-stone-900">Ryan Al-Fayed</p>
<p className="text-xs text-stone-500">Owner of Luna, Frenchie</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight mb-12 text-center">Facility Amenities</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-stone-400" icon="solar:camera-linear"></iconify-icon>
<div>
<h4 className="font-medium text-stone-900 mb-1">Webcams</h4>
<p className="text-sm text-stone-500">Secure access live stream.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-stone-400" icon="solar:snowflake-linear"></iconify-icon>
<div>
<h4 className="font-medium text-stone-900 mb-1">Climate Control</h4>
<p className="text-sm text-stone-500">Perfect 21°C year-round.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-stone-400" icon="solar:medical-kit-linear"></iconify-icon>
<div>
<h4 className="font-medium text-stone-900 mb-1">Wellness Room</h4>
<p className="text-sm text-stone-500">Isolation for minor issues.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-stone-400" icon="solar:sofa-linear"></iconify-icon>
<div>
<h4 className="font-medium text-stone-900 mb-1">Luxury Suites</h4>
<p className="text-sm text-stone-500">Real beds, not crates.</p>
</div>
</div>
</div>
</div>
</section>

<section className="h-96 w-full relative bg-stone-200">

<div className="absolute inset-0 flex items-center justify-center bg-stone-300">
<p className="text-stone-500 font-medium tracking-widest uppercase">Ontario Interactive Map Integration</p>
</div>
<div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-lg max-w-sm">
<h4 className="font-medium text-lg mb-2">The Houndry Ontario</h4>
<p className="text-sm text-stone-500 mb-4">123 King Street West<br/>Toronto, ON M5H 1K4</p>
<a className="text-xs uppercase font-bold tracking-widest text-stone-900 border-b border-stone-900 pb-0.5" href="#">Get Directions</a>
</div>
</section>

<section className="py-24 bg-stone-900 text-center px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Join the Waitlist</h2>
<p className="text-stone-400 mb-8 max-w-xl mx-auto">We cap our membership to ensure quality care. Sign up to be notified when spots open.</p>
<form className="max-w-md mx-auto flex gap-2">
<input className="flex-1 bg-stone-800 border border-stone-700 text-white rounded-full px-6 py-3 focus:outline-none focus:ring-1 focus:ring-stone-500" placeholder="Email Address" type="email"/>
<button className="bg-white text-stone-900 px-6 py-3 rounded-full font-medium hover:bg-stone-200 transition-colors" type="submit">Join</button>
</form>
</section>
</main>

<main className="page pt-24 pb-24" id="services">

<section className="max-w-7xl mx-auto px-6 mb-20">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-stone-900 mb-6">Services &amp; <br/>Reservations</h1>
<p className="text-lg text-stone-500 font-light max-w-2xl">Transparent pricing for premium care. All services include complimentary enrichment activities and photo updates.</p>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-stone-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-medium mb-1">Social Daycare</h3>
<p className="text-sm text-stone-500">Daytime enrichment</p>
</div>
<iconify-icon className="text-3xl text-stone-300" icon="solar:sun-2-linear"></iconify-icon>
</div>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">$55</span><span className="text-stone-500 text-sm"> / day</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-stone-600">
<li className="flex gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> 10 hours of care</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Group play sessions</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Mid-day rest break</li>
</ul>
<button className="w-full py-3 border border-stone-200 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors" onclick="scrollToBook()">Select Daycare</button>
</div>

<div className="border border-stone-900 bg-stone-900 text-white rounded-2xl p-8 shadow-xl relative transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg rounded-tr-lg">Most Popular</div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-medium mb-1">Luxury Boarding</h3>
<p className="text-sm text-stone-400">Overnight suite stay</p>
</div>
<iconify-icon className="text-3xl text-stone-600" icon="solar:moon-linear"></iconify-icon>
</div>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">$85</span><span className="text-stone-400 text-sm"> / night</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-stone-300">
<li className="flex gap-3"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Private glass-door suite</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Premium bedding &amp; tuck-in</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Morning &amp; evening walks</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> 24/7 Monitoring</li>
</ul>
<button className="w-full py-3 bg-white text-stone-900 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors" onclick="scrollToBook()">Book Boarding</button>
</div>

<div className="border border-stone-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-medium mb-1">The Spa</h3>
<p className="text-sm text-stone-500">Grooming &amp; Treatments</p>
</div>
<iconify-icon className="text-3xl text-stone-300" icon="solar:bath-linear"></iconify-icon>
</div>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">Varies</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-stone-600">
<li className="flex gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Full groom &amp; styling</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Pawdicure</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Blueberry facial</li>
</ul>
<button className="w-full py-3 border border-stone-200 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors" onclick="scrollToBook()">Inquire Now</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<h3 className="text-xl font-medium mb-8">Curated Add-ons</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-xl border border-stone-100 flex items-center justify-between">
<div>
<p className="font-medium text-stone-900">Exit Bath</p>
<p className="text-sm text-stone-500">+$25</p>
</div>
<input className="accent-stone-900 h-5 w-5" type="checkbox"/>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-100 flex items-center justify-between">
<div>
<p className="font-medium text-stone-900">Solo Walk (30m)</p>
<p className="text-sm text-stone-500">+$20</p>
</div>
<input className="accent-stone-900 h-5 w-5" type="checkbox"/>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-100 flex items-center justify-between">
<div>
<p className="font-medium text-stone-900">Gourmet Treat</p>
<p className="text-sm text-stone-500">+$8</p>
</div>
<input className="accent-stone-900 h-5 w-5" type="checkbox"/>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-100 flex items-center justify-between">
<div>
<p className="font-medium text-stone-900">Cuddle Time</p>
<p className="text-sm text-stone-500">+$15</p>
</div>
<input className="accent-stone-900 h-5 w-5" type="checkbox"/>
</div>
</div>
</section>

<section className="py-16 bg-white mb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium tracking-tight">How to become a member</h2>
</div>
<div className="flex flex-col md:flex-row justify-between items-center relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-stone-200 -z-0"></div>

<div className="relative z-10 bg-white p-4 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold mb-4">1</div>
<h4 className="font-medium">Book Tour</h4>
<p className="text-xs text-stone-500 mt-2 w-48">Visit our facility and meet the team.</p>
</div>

<div className="relative z-10 bg-white p-4 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center font-bold mb-4">2</div>
<h4 className="font-medium">Assessment</h4>
<p className="text-xs text-stone-500 mt-2 w-48">A 2-hour temperament test.</p>
</div>

<div className="relative z-10 bg-white p-4 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center font-bold mb-4">3</div>
<h4 className="font-medium">Vaccinations</h4>
<p className="text-xs text-stone-500 mt-2 w-48">Submit vet records (Bordetella req).</p>
</div>

<div className="relative z-10 bg-white p-4 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center font-bold mb-4">4</div>
<h4 className="font-medium">Welcome</h4>
<p className="text-xs text-stone-500 mt-2 w-48">Access to booking portal.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24" id="booking-form">
<div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
<div className="bg-stone-50 px-8 py-6 border-b border-stone-200">
<h2 className="text-xl font-medium text-stone-900">Request Reservation / Tour</h2>
<p className="text-sm text-stone-500 mt-1">We will confirm availability via email within 2 hours.</p>
</div>
<div className="p-8">
<form className="space-y-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-stone-200 text-center text-sm font-medium text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">Tour</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-stone-200 text-center text-sm font-medium text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">Daycare</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-stone-200 text-center text-sm font-medium text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">Boarding</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-stone-200 text-center text-sm font-medium text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">Spa</div>
</label>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-2">Check In</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-200" type="date"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-2">Check Out</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-200" type="date"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-2">Owner Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-200" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-2">Email</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-200" placeholder="jane@example.com" type="email"/>
</div>
</div>

<div>
<label className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-2">Dog Details</label>
<div className="grid grid-cols-3 gap-4">
<input className="col-span-1 bg-stone-50 border border-stone-200 rounded-lg px-4 py-3" placeholder="Name" type="text"/>
<input className="col-span-1 bg-stone-50 border border-stone-200 rounded-lg px-4 py-3" placeholder="Breed" type="text"/>
<input className="col-span-1 bg-stone-50 border border-stone-200 rounded-lg px-4 py-3" placeholder="Age" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-2">Special Requests / Medical Notes</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-200" rows="3"></textarea>
</div>

<div className="flex items-center justify-between pt-4">
<div className="flex items-center gap-2">
<input className="rounded border-stone-300" id="terms" type="checkbox"/>
<label className="text-xs text-stone-500" htmlFor="terms">I agree to terms &amp; policies</label>
</div>
<button className="px-8 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors" type="button">Submit Request</button>
</div>
</form>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-24" id="faq">
<h2 className="text-2xl font-medium tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-stone-200 open:border-stone-400 open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5">
<span>What vaccinations are required?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        We strictly require Rabies, DHPP, and Bordetella. All vaccinations must be administered at least 10 days prior to your visit.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-stone-200 open:border-stone-400 open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5">
<span>Do you accept intact dogs?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        For safety reasons, all guests over the age of 7 months must be spayed or neutered to participate in group play.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-stone-200 open:border-stone-400 open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5">
<span>What should I bring for boarding?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Please bring your dog's food (pre-portioned is preferred) and any medication. We provide premium bedding and bowls, so please leave those at home to avoid loss.
                    </div>
</details>
</div>
</section>
</main>

<footer className="bg-stone-900 text-stone-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl text-white font-medium uppercase tracking-tight mb-6 block" href="#">The Houndry.</a>
<p className="text-sm font-light">Elevating the standard of canine care in Ontario.</p>
</div>
<div>
<h5 className="text-white font-medium mb-4">Explore</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('home')">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('services')">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Contact</h5>
<ul className="space-y-2 text-sm">
<li>hello@thehoundry.ca</li>
<li>(416) 555-0198</li>
<li>Toronto, Ontario</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Hours</h5>
<ul className="space-y-2 text-sm">
<li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white">7am - 8pm</span></li>
<li className="flex justify-between"><span>Sat - Sun</span> <span className="text-white">9am - 5pm</span></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p>© 2024 The Houndry Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
