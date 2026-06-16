import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    


      function toggleMenu() {
          const menu = document.getElementById('mobile-menu');
          if(menu.classList.contains('hidden')) {
              menu.classList.remove('hidden');
              menu.classList.add('flex');
          } else {
              menu.classList.add('hidden');
              menu.classList.remove('flex');
          }
      }

      function showDetails(title, location, price, imgSrc) {
          document.querySelectorAll('.home-section').forEach(el => el.style.display = 'none');
          document.getElementById('details-view').classList.remove('hidden');
          window.scrollTo({top: 0, behavior: 'smooth'});

          document.getElementById('detail-title').innerText = title;
          document.getElementById('detail-location').innerText = location;
          document.getElementById('detail-price').innerText = price;
          document.getElementById('detail-main-img').src = imgSrc;

          if(window.lucide) {
              lucide.createIcons();
          }
      }

      function showHome() {
          document.getElementById('details-view').classList.add('hidden');
          document.querySelectorAll('.home-section').forEach(el => el.style.display = '');
          window.scrollTo({top: 0, behavior: 'smooth'});
      }

      function openBooking() {
          document.getElementById('booking-modal').classList.remove('hidden');
      }

      function closeBooking() {
          document.getElementById('booking-modal').classList.add('hidden');
      }

      setTimeout(() => {
          if(window.lucide) lucide.createIcons();
      }, 100);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/50 transition-all duration-300 shadow-sm">
<div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
<a className="font-serif italic text-3xl font-medium tracking-tight text-stone-900 hover:opacity-70 transition-opacity" href="#" onclick="showHome()">
          Estate
        </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-stone-900 transition-colors" href="#" onclick="showHome()">
            Properties
          </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">
            Landscapes
          </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">
            Process
          </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">
            Contact
          </a>
</div>

<button className="hidden md:block bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
          Inquire
        </button>

<button className="md:hidden text-stone-900 p-2" onclick="toggleMenu()">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="home-section relative w-[92%] md:w-[96%] h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden rounded-[2.5rem] md:rounded-[3rem] mx-auto max-w-[1400px] mt-24 md:mt-28 shadow-lg" id="hero-section">
<img alt="Rolling green hills" className="absolute inset-0 w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2689&amp;auto=format&amp;fit=crop'" src="https://i.ibb.co/C38DRMrb/hero-bg.jpg"/>
<div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[2px]"></div>
<div className="relative z-10 text-center px-6 w-full max-w-3xl">
<h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
          Own the Horizon.
        </h1>
<p className="text-lg md:text-xl font-light text-white/95 mb-10 max-w-xl mx-auto drop-shadow-sm">
          Curated land acquisitions for the modern visionary. Untouched
          landscapes awaiting your vision.
        </p>
<div className="flex items-center justify-center gap-4">
<button className="bg-white/20 hover:bg-white/30 backdrop-blur-lg border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-sm">
            Explore Holdings
          </button>
</div>
</div>
</header>

<section className="home-section max-w-[1400px] mx-auto px-6 py-24 md:py-32" id="featured-section">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h3 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-3">
            Featured Opportunities
          </h3>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900">
            Selected Parcels
          </h2>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors" href="#">
          View All Listings
          <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-[2rem] p-4 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="relative h-[280px] rounded-[1.5rem] overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-stone-900 shadow-sm">
              Premium
            </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-2xl font-medium tracking-tight text-stone-900">
                Veridian Heights
              </h3>
<span className="text-lg font-medium text-stone-900">$1.2M</span>
</div>
<p className="text-sm text-stone-500 mb-6">
              42 Acres • Sonoma Valley, CA
            </p>
<button className="w-full bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-900 py-3.5 rounded-2xl text-sm font-medium transition-colors" onclick="showDetails('Veridian Heights', '42 Acres • Sonoma Valley, CA', '$1.2M', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')">
              See Details
            </button>
</div>
</div>

<div className="bg-white rounded-[2rem] p-4 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="relative h-[280px] rounded-[1.5rem] overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-2xl font-medium tracking-tight text-stone-900">
                Oak Creek Reserve
              </h3>
<span className="text-lg font-medium text-stone-900">$850K</span>
</div>
<p className="text-sm text-stone-500 mb-6">12 Acres • Aspen, CO</p>
<button className="w-full bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-900 py-3.5 rounded-2xl text-sm font-medium transition-colors" onclick="showDetails('Oak Creek Reserve', '12 Acres • Aspen, CO', '$850K', 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')">
              See Details
            </button>
</div>
</div>

<div className="bg-white rounded-[2rem] p-4 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="relative h-[280px] rounded-[1.5rem] overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-2xl font-medium tracking-tight text-stone-900">
                Riverbend Reach
              </h3>
<span className="text-lg font-medium text-stone-900">$640K</span>
</div>
<p className="text-sm text-stone-500 mb-6">8 Acres • Bozeman, MT</p>
<button className="w-full bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-900 py-3.5 rounded-2xl text-sm font-medium transition-colors" onclick="showDetails('Riverbend Reach', '8 Acres • Bozeman, MT', '$640K', 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&amp;w=1887&amp;auto=format&amp;fit=crop')">
              See Details
            </button>
</div>
</div>
</div>
</section>

<section className="bg-[#0a2e1f] py-24 px-6 my-12 mx-auto max-w-[1550px] rounded-[2.5rem] md:rounded-[3rem] home-section">
<div className="max-w-5xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl text-center font-medium tracking-tight text-white mb-16">
          The Acquisition Process
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#a7f3d0]" data-lucide="mountain"></i>
</div>
<h3 className="font-serif text-2xl font-medium text-white mb-3 tracking-tight">
              Identify Land
            </h3>
<p className="text-base font-light text-white/70">
              Curated landscape selections tailored to your vision.
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#a7f3d0]" data-lucide="shield-check"></i>
</div>
<h3 className="font-serif text-2xl font-medium text-white mb-3 tracking-tight">
              Clear Title
            </h3>
<p className="text-base font-light text-white/70">
              Guaranteed secure ownership and transparent history.
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors relative">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#a7f3d0]" data-lucide="pen-tool"></i>
</div>
<h3 className="font-serif text-2xl font-medium text-white mb-3 tracking-tight">
              Digital Closing
            </h3>
<p className="text-base font-light text-white/70">
              Secure, remote signatures for a seamless handover.
            </p>

<div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center md:hidden">
<i className="w-5 h-5 text-[#0a2e1f]" data-lucide="check"></i>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-[1550px] mx-auto px-4 pb-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">

<div className="lg:col-span-4 bg-[#0a2e1f] text-white p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[400px]">
<div>
<h2 className="font-serif italic text-4xl font-medium tracking-tight mb-6">
              Estate
            </h2>
<p className="text-lg font-light text-white/70 leading-relaxed max-w-sm">
              Defining the future of land acquisition through transparency and
              digital-first experiences.
            </p>
</div>
<div className="mt-12">
<p className="text-sm font-light text-white/40 mb-6">
              © 2024 The Digital Estate. All rights reserved.
            </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
<i className="w-5 h-5 text-white/80" data-lucide="globe"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
<i className="w-5 h-5 text-white/80" data-lucide="mail"></i>
</a>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-[#f0f1ec] p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[400px]">
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-6">
                Resources
              </h4>
<ul className="space-y-4">
<li>
<a className="text-base font-medium text-stone-800 hover:text-stone-500 transition-colors" href="#">
                    Land Registry
                  </a>
</li>
<li>
<a className="text-base font-medium text-stone-800 hover:text-stone-500 transition-colors" href="#">
                    Sustainability
                  </a>
</li>
<li>
<a className="text-base font-medium text-stone-800 hover:text-stone-500 transition-colors" href="#">
                    Legal FAQ
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-6">
                Company
              </h4>
<ul className="space-y-4">
<li>
<a className="text-base font-medium text-stone-800 hover:text-stone-500 transition-colors" href="#">
                    Privacy Policy
                  </a>
</li>
<li>
<a className="text-base font-medium text-stone-800 hover:text-stone-500 transition-colors" href="#">
                    Terms of Service
                  </a>
</li>
<li>
<a className="text-base font-medium text-stone-800 hover:text-stone-500 transition-colors" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>
</div>

<div className="self-end mt-8">
<div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
<i className="w-5 h-5 text-stone-400" data-lucide="message-square"></i>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-[#0a2e1f] text-white p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[400px]">
<div>
<h3 className="font-serif text-3xl font-medium tracking-tight mb-4">
              Stay informed.
            </h3>
<p className="text-lg font-light text-white/70 mb-8">
              Receive exclusive updates on new land releases and heritage
              acquisitions.
            </p>
</div>
<div className="relative mt-auto">
<input className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-14 text-base text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all" placeholder="Email Address" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors">
<i className="w-5 h-5 text-[#0a2e1f]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</footer>

<div className="hidden max-w-[1200px] mx-auto px-6 pt-36 pb-24 min-h-[80vh]" id="details-view">
<button className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8 text-sm font-medium" onclick="showHome()">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
        Back to Listings
      </button>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="flex flex-col gap-4">
<div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-sm">
<img className="w-full h-full object-cover" id="detail-main-img" src=""/>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 md:h-32 rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-24 md:h-32 rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-24 md:h-32 rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-4">
<h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900" id="detail-title">
              Property Title
            </h1>
<span className="text-2xl font-medium text-stone-900 mt-1" id="detail-price">
              $0
            </span>
</div>
<p className="text-lg text-stone-500 mb-8" id="detail-location">
            Location details
          </p>
<p className="text-stone-600 leading-relaxed mb-8">
            This exceptional parcel offers unprecedented potential for visionary
            development. Nestled in a prime location with sweeping panoramic
            views, the landscape provides both privacy and accessibility.
            Featuring rich soil, mature timber, and a gentle topography, it is
            ideally suited for a bespoke estate or a legacy conservation
            project.
          </p>
<div className="grid grid-cols-2 gap-4 mb-10">
<div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm">
<i className="w-6 h-6 text-stone-400 mb-3" data-lucide="map"></i>
<span className="block text-sm font-medium text-stone-900">
                Zoning
              </span>
<span className="text-sm text-stone-500">Residential / Ag</span>
</div>
<div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm">
<i className="w-6 h-6 text-stone-400 mb-3" data-lucide="droplet"></i>
<span className="block text-sm font-medium text-stone-900">
                Water Rights
              </span>
<span className="text-sm text-stone-500">Included</span>
</div>
</div>
<div className="w-full h-56 rounded-[1.5rem] overflow-hidden mb-10 bg-stone-100 border border-stone-200">
<iframe allowfullscreen="" aria-hidden="false" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1602143005888!5m2!1sen!2sau" style={{border: '0'}} tabindex="0" width="100%"></iframe>
</div>
<button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-4 rounded-full text-base font-medium transition-colors shadow-md hover:shadow-lg mt-auto" onclick="openBooking()">
            Book a Call
          </button>
</div>
</div>
</div>
<div className="hidden fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/40 backdrop-blur-md p-4 transition-opacity" id="booking-modal">
<div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 w-full max-w-md shadow-2xl border border-white relative">
<button className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors" onclick="closeBooking()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<h3 className="font-serif text-3xl font-medium tracking-tight text-stone-900 mb-2">
          Schedule a Call
        </h3>
<p className="text-sm text-stone-500 mb-8">
          Select a time to discuss this property with our acquisition team.
        </p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Booking confirmed! We will contact you soon.'); closeBooking();">
<div>
<label className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2 ml-1">
              Mobile Number
            </label>
<input className="w-full bg-white/60 border border-stone-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-400 transition-all placeholder:text-stone-400" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2 ml-1">
              Email (Optional)
            </label>
<input className="w-full bg-white/60 border border-stone-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-400 transition-all placeholder:text-stone-400" placeholder="hello@example.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2 ml-1">
                Date
              </label>
<input className="w-full bg-white/60 border border-stone-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-400 transition-all text-stone-900" required="" type="date"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2 ml-1">
                Time
              </label>
<input className="w-full bg-white/60 border border-stone-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-400 transition-all text-stone-900" required="" type="time"/>
</div>
</div>
<button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-4 rounded-full text-base font-medium transition-colors shadow-md mt-6" type="submit">
            Confirm Booking
          </button>
</form>
</div>
</div>


    </>
  );
}
