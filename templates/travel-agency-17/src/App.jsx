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



        lucide.createIcons();
    


        // Auto-show popup after delay
        setTimeout(function() {
          const popup = document.getElementById('lead-capture-overlay');
          if (popup && !localStorage.getItem('leadPopupShown')) {
            popup.classList.add('show');
          }
        }, 5000);

        function closeLeadPopup(event) {
          if (event && event.target !== event.currentTarget) return;
          const popup = document.getElementById('lead-capture-overlay');
          popup.classList.remove('show');
          localStorage.setItem('leadPopupShown', 'true');
        }

        function submitLeadForm(event) {
          event.preventDefault();
          
          const formData = new FormData(event.target);
          const name = formData.get('name');
          const phone = formData.get('phone');
          const address = formData.get('address');
          const message = formData.get('message');
          
          let leadMessage = '🎯 *New Lead Captured!*\n\n';
          leadMessage += '👤 *Name:* ' + name + '\n';
          leadMessage += '📱 *Phone:* ' + phone + '\n';
          
          if (address) {
            leadMessage += '🏠 *Address:* ' + address + '\n';
          }
          
          if (message) {
            leadMessage += '💬 *Message:* ' + message + '\n';
          }
          
          leadMessage += '\n⏰ *Time:* ' + new Date().toLocaleString();
          leadMessage += '\n\n_Generated via Widgetify Lead Capture_';
          
          const whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(leadMessage);
          window.open(whatsappUrl, '_blank');
          
          // Show success message and close popup
          alert('✅ Thank you! Your details have been sent successfully. We will contact you soon!');
          closeLeadPopup();
          
          // Reset form
          event.target.reset();
        }
        
        // Prevent showing popup if already shown in this session
        if (localStorage.getItem('leadPopupShown')) {
          // Optional: Clear after 24 hours
          const lastShown = localStorage.getItem('leadPopupShownTime');
          const now = new Date().getTime();
          if (!lastShown || (now - parseInt(lastShown)) > 24 * 60 * 60 * 1000) {
            localStorage.removeItem('leadPopupShown');
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
      

<nav className="fixed w-full z-40 glass border-b border-gray-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#25D366]/10 p-1.5 rounded-lg group-hover:bg-[#25D366]/20 transition-colors">
<i className="w-5 h-5 text-[#25D366]" data-lucide="plane"></i>
</div>
<span className="font-semibold text-[#1D1D1F] tracking-tight text-lg">GLOBAL BEST</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-[#25D366] transition-colors" href="#destinations">Destinations</a>
<a className="hover:text-[#25D366] transition-colors" href="#features">Why Us</a>
<a className="hover:text-[#25D366] transition-colors" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-[#1D1D1F] hover:text-[#25D366] transition-colors">Log in</button>
<button className="bg-[#1D1D1F] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300">
                    Book Now
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

<div className="flex-1 text-center md:text-left space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-xs font-semibold uppercase tracking-wide">
<span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                        TravSpent Collection
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1D1D1F] tracking-tight leading-[1.05]">
                        Experience <br/>
<span className="text-[#25D366]">Mindful Travel.</span>
</h1>
<p className="text-lg text-gray-500 max-w-lg mx-auto md:mx-0 leading-relaxed font-normal">
                        Curated journeys that blend luxury with sustainability. Discover the world's hidden gems with zero compromise on comfort.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<button className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#20bd5a] transition-all shadow-xl shadow-[#25D366]/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                            Explore Packages
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-[#1D1D1F] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 border border-gray-200">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                            Watch Video
                        </button>
</div>
<div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
<div className="flex -space-x-3">
<div className="w-9 h-9 rounded-full bg-gray-200 border-[3px] border-white"></div>
<div className="w-9 h-9 rounded-full bg-gray-300 border-[3px] border-white"></div>
<div className="w-9 h-9 rounded-full bg-gray-400 border-[3px] border-white"></div>
</div>
<p>Trusted by 10,000+ travelers</p>
</div>
</div>

<div className="flex-1 w-full relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-[#25D366]/20 to-transparent rounded-[2.5rem] blur-3xl opacity-40"></div>
<div className="relative aspect-[4/5] md:aspect-square lg:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 group">
<img alt="Traveler overlooking canyon" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=2021&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 glass p-5 rounded-2xl shadow-lg border border-white/40 flex items-center justify-between">
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Trending Now</p>
<p className="text-[#1D1D1F] font-semibold text-lg">Swiss Alps</p>
</div>
<div className="h-12 w-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366]">
<i className="w-6 h-6" data-lucide="mountain"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
<div className="bg-white p-3 rounded-full shadow-2xl shadow-gray-200/60 flex flex-col md:flex-row items-center gap-2 border border-gray-100">
<div className="flex-1 w-full px-6 py-3 border-b md:border-b-0 border-gray-100">
<div className="flex items-center gap-3 text-gray-400 mb-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="text-xs font-semibold uppercase tracking-wide">Location</span>
</div>
<input className="w-full outline-none text-[#1D1D1F] placeholder:text-gray-400 font-medium bg-transparent" placeholder="Where to next?" type="text"/>
</div>
<div className="w-px h-10 bg-gray-100 hidden md:block"></div>
<div className="flex-1 w-full px-6 py-3 border-b md:border-b-0 border-gray-100">
<div className="flex items-center gap-3 text-gray-400 mb-1">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span className="text-xs font-semibold uppercase tracking-wide">Date</span>
</div>
<input className="w-full outline-none text-[#1D1D1F] placeholder:text-gray-400 font-medium bg-transparent" placeholder="Add dates" type="text"/>
</div>
<div className="w-px h-10 bg-gray-100 hidden md:block"></div>
<div className="flex-1 w-full px-6 py-3">
<div className="flex items-center gap-3 text-gray-400 mb-1">
<i className="w-4 h-4" data-lucide="users"></i>
<span className="text-xs font-semibold uppercase tracking-wide">Guests</span>
</div>
<input className="w-full outline-none text-[#1D1D1F] placeholder:text-gray-400 font-medium bg-transparent" placeholder="Add guests" type="text"/>
</div>
<button className="w-full md:w-auto bg-[#1D1D1F] hover:bg-[#25D366] text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#25D366]/30">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
</div>
</div>

<section className="py-24 bg-[#FAFAFA]" id="destinations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-4">Top Destinations</h2>
<p className="text-gray-500 max-w-md text-lg">Discover our most popular eco-friendly retreats.</p>
</div>
<a className="text-[#25D366] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm group" href="#">
                    View all places <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#25D366]/10 transition-all duration-500">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
<img alt="Bali" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-xs font-semibold text-[#1D1D1F] z-20">
                            $1,200 <span className="text-gray-500 font-normal">/ person</span>
</div>
</div>
<h3 className="text-xl font-semibold text-[#1D1D1F] group-hover:text-[#25D366] transition-colors">Ubud, Bali</h3>
<div className="flex items-center gap-2 text-gray-500 text-sm mt-1.5">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Indonesia
                    </div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#25D366]/10 transition-all duration-500">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
<img alt="Maldives" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-xs font-semibold text-[#1D1D1F] z-20">
                            $2,400 <span className="text-gray-500 font-normal">/ person</span>
</div>
</div>
<h3 className="text-xl font-semibold text-[#1D1D1F] group-hover:text-[#25D366] transition-colors">Baa Atoll</h3>
<div className="flex items-center gap-2 text-gray-500 text-sm mt-1.5">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Maldives
                    </div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#25D366]/10 transition-all duration-500">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
<img alt="Norway" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-xs font-semibold text-[#1D1D1F] z-20">
                            $1,800 <span className="text-gray-500 font-normal">/ person</span>
</div>
</div>
<h3 className="text-xl font-semibold text-[#1D1D1F] group-hover:text-[#25D366] transition-colors">Lofoten Islands</h3>
<div className="flex items-center gap-2 text-gray-500 text-sm mt-1.5">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Norway
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-4">The Global Best Difference</h2>
<p className="text-gray-500 text-lg">We believe travel should be rejuvenating for you and respectful to the planet.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#FAFAFA] p-10 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
<i className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors" data-lucide="leaf"></i>
</div>
<h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">Sustainable Stays</h3>
<p className="text-base text-gray-500 leading-relaxed">Partnering exclusively with eco-certified lodges that prioritize environmental responsibility.</p>
</div>

<div className="bg-[#FAFAFA] p-10 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
<i className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">Safe &amp; Secure</h3>
<p className="text-base text-gray-500 leading-relaxed">Your safety is paramount. We offer 24/7 support and verified guides for every destination.</p>
</div>

<div className="bg-[#FAFAFA] p-10 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
<i className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">Transparent Pricing</h3>
<p className="text-base text-gray-500 leading-relaxed">No hidden fees. Enjoy clear, competitive pricing on all our premium travel packages.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight">Traveler Stories</h2>
<div className="flex gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-[#25D366] hover:text-[#25D366] transition-all shadow-sm">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-[#25D366] hover:text-[#25D366] transition-all shadow-sm">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10">

<div className="min-w-[340px] md:min-w-[420px] bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all snap-start">
<div className="flex gap-1 text-[#25D366] mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-[#1D1D1F] text-lg mb-8 leading-relaxed font-medium">"Global Best planned the most amazing honeymoon for us in Bali. Every detail was taken care of, and the eco-resort was stunning."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-base">S</div>
<div>
<p className="font-semibold text-[#1D1D1F] text-sm">Sarah Johnson</p>
<p className="text-xs text-gray-400 mt-0.5">Bali Traveler</p>
</div>
</div>
</div>

<div className="min-w-[340px] md:min-w-[420px] bg-[#1D1D1F] rounded-[2rem] p-10 shadow-xl shadow-gray-300 snap-start transform md:-translate-y-2">
<div className="flex gap-1 text-[#25D366] mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-white text-lg mb-8 leading-relaxed font-medium">"I appreciate the commitment to sustainability. It feels good to travel knowing my footprint is minimized. Highly recommended!"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-base">M</div>
<div>
<p className="font-semibold text-white text-sm">Michael Chen</p>
<p className="text-xs text-gray-400 mt-0.5">Norway Traveler</p>
</div>
</div>
</div>

<div className="min-w-[340px] md:min-w-[420px] bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all snap-start">
<div className="flex gap-1 text-[#25D366] mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-[#1D1D1F] text-lg mb-8 leading-relaxed font-medium">"Seamless booking process and excellent customer support. The itinerary they suggested for the Alps was perfect."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-base">E</div>
<div>
<p className="font-semibold text-[#1D1D1F] text-sm">Emma Davis</p>
<p className="text-xs text-gray-400 mt-0.5">Swiss Alps Traveler</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-[#25D366]/10 p-1.5 rounded-lg">
<i className="w-5 h-5 text-[#25D366]" data-lucide="plane"></i>
</div>
<span className="font-semibold text-[#1D1D1F] tracking-tight">GLOBAL BEST</span>
</a>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">Making the world accessible, sustainable, and unforgettable, one journey at a time.</p>
<div className="flex gap-5">
<a className="text-gray-400 hover:text-[#25D366] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-[#25D366] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-400 hover:text-[#25D366] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-[#1D1D1F] mb-6">Company</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#25D366] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Press</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1D1D1F] mb-6">Support</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#25D366] transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1D1D1F] mb-6">Newsletter</h4>
<p className="text-sm text-gray-500 mb-4">Subscribe for travel inspiration.</p>
<form className="flex gap-2">
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#25D366] transition-colors" placeholder="Email address" type="email"/>
<button className="bg-[#1D1D1F] text-white px-5 py-2.5 rounded-lg hover:bg-[#25D366] transition-colors text-sm font-medium" type="button">
                            Join
                        </button>
</form>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2023 Global Best Travel Agency. All rights reserved.</p>
<div className="flex items-center gap-1 text-xs text-gray-400">
<span>Designed with</span>
<i className="w-3 h-3 text-[#25D366] fill-[#25D366]" data-lucide="heart"></i>
<span>for explorers.</span>
</div>
</div>
</div>
</footer>

<button aria-label="Open Widget" className="widgetify-widget" onclick="document.getElementById('lead-capture-overlay').classList.add('show')">
<svg fill="white" height="32" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
</button>

<div className="lead-popup-overlay" id="lead-capture-overlay" onclick="closeLeadPopup(event)">
<div className="lead-popup-container" onclick="event.stopPropagation()">
<button aria-label="Close popup" className="lead-popup-close" onclick="closeLeadPopup()">×</button>
<h2 className="lead-popup-title">Get In Touch With Us!</h2>
<p className="lead-popup-subtitle">Leave your details and we'll contact you soon</p>
<form id="lead-capture-form" onsubmit="submitLeadForm(event)">
<input className="lead-form-field" name="name" placeholder="Your Full Name *" required="" type="text" />
<input className="lead-form-field" name="phone" placeholder="Your Phone Number *" required="" type="tel" />
<input className="lead-form-field" name="address" placeholder="Your Address" type="text" />
<textarea className="lead-form-field" name="message" placeholder="Your Message" rows="3" style={{resize: 'vertical', minHeight: '80px'}}></textarea>
<button className="lead-form-button" type="submit">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18">
<path d="M17.6 6.32A7.85 7.85 0 0 0 12 4.02a7.95 7.95 0 0 0-6.9 12.07L4 20.02l4.05-1.06A8.02 8.02 0 0 0 12 20.02a7.98 7.98 0 0 0 8-7.93c0-2.12-.83-4.12-2.4-5.62V6.32z"></path>
</svg>
              Send My Details
            </button>
</input></input></input></form>
<div className="lead-popup-footer">
<a href="https://widgetify-two.vercel.app" target="_blank">Powered by Widgetify</a>
</div>
</div>
</div>





    </>
  );
}
